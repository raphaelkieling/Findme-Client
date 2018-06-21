import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Usuario } from '../../domain/usuario';
import { UsuarioService } from '../../services/core/usuario.service';
import { ComentarioService } from '../../services/core/comentario.service';
import { Comentario } from '../../domain/comentario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  loading: boolean = false;

  rate: any = 0;

  public imageUrl = 'assets/images/avatar.jpg';

  constructor(
    public dialogRef: MatDialogRef<PerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.carregaPerfil();
  }


  private carregaPerfil() {
    this.loading = true;
    this.usuarioService
      .usuario(this.data.id)
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.usuario = data['usuario'];
        console.log(this.usuario);
      });
  }
}
