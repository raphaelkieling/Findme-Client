import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../domain/comentario';
import { ComentarioService } from '../../services/core/comentario.service';
import { MzBaseModal, MzModalService } from 'ng2-materialize';
import { ComentarioModalComponent } from './comentario-modal/comentario-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  @Input() idUsuario;
  loadingComentario: boolean = false;
  comentarios: Comentario[];
  imageUrl = 'assets/images/avatar.jpg';

  constructor(
    private comentarioService: ComentarioService,
    public modal: MatDialog
  ) { }

  ngOnInit() {
    this.carregaComentarios();
  }

  private carregaComentarios() {
    this.loadingComentario = true;
    this.comentarioService
      .comentarioUsuario(this.idUsuario)
      .subscribe(({ data, loading }) => {
        this.loadingComentario = loading;
        this.comentarios = data['comentariosUsuario'];
      });
  }

  openComentarModal() {
    this.modal.open(ComentarioModalComponent, {
      data: {
        idUsuario: this.idUsuario,
        carregaComentarios: this.carregaComentarios.bind(this)
      }
    })
  }

}
