import { MatDialog } from '@angular/material/dialog';
import { ChatService } from './../../../services/chat.service';
import { Usuario } from './../../../domain/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/core/usuario.service';
import { PerfilComponent } from '../../../components/perfil/perfil.component';

@Component({
  selector: 'app-usuarios-publicos',
  templateUrl: './usuarios-publicos.component.html',
  styleUrls: ['./usuarios-publicos.component.css']
})
export class UsuariosPublicosComponent implements OnInit {
  loading = false;
  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];

  constructor(
    private usuarioS: UsuarioService,
    private chatService: ChatService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.carregaUsuarios();
  }


  private carregaUsuarios() {
    this.loading = true;
    this.usuarioS.usuarios().subscribe(({ data }) => {
      this.loading = false;
      this.usuarios = data['usuarios'];
      this.usuariosFiltrados = data['usuarios'];
    });
  }

  filter(value: string) {
    this.usuariosFiltrados = this.usuarios.filter((usuario: Usuario) => {
      if (!usuario.pessoa) return false;
      
      return usuario.pessoa.nome.toLowerCase().includes(value.toLowerCase())
    });
  }

  openPerfil(usuario: Usuario) {
    this.dialog.open(PerfilComponent, {
      data: usuario,
      width: '600px',
      height: '500px'
    });
  }

  abrirChat(usuario) {
    this.chatService.addChat(usuario);
  }

}
