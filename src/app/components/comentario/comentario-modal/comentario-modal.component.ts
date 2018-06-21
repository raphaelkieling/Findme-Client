import { Component, OnInit, Inject } from '@angular/core';
import { Comentario } from '../../../domain/comentario';
import { ComentarioService } from '../../../services/core/comentario.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { PerfilComponent } from '../../perfil/perfil.component';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-comentario-modal',
  templateUrl: './comentario-modal.component.html',
  styleUrls: ['./comentario-modal.component.css']
})
export class ComentarioModalComponent implements OnInit {
  comentario: string = '';
  loading: boolean = false;
  nota: number;

  constructor(
    private comentarioService: ComentarioService,
    public dialogRef: MatDialogRef<PerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toast: MatSnackBar
  ) { }

  ngOnInit() {
  }

  criarComentario() {
    this.loading = true;

    let comentario: Comentario = new Comentario(this.comentario, this.nota, this.data.idUsuario);
    this.comentarioService
      .criarComentario(comentario)
      .subscribe((data) => {
        this.toast.open('Comentário feito, muito obrigado!!', 'Shoow!');
        this.data.carregaComentarios();
        this.dialogRef.close();
        this.loading = false;
      })
  }

}
