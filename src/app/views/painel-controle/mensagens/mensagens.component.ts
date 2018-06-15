import { Mensagem } from './../../../domain/mensagem';
import { ChatService } from './../../../services/chat.service';
import { MatDialog } from '@angular/material/dialog';
import { MensagemService } from './../../../services/core/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../domain/usuario';
import { PerfilComponent } from '../../../components/perfil/perfil.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {
  messages: Mensagem[] = []
  idLogged: any;

  constructor(
    private mensagemService: MensagemService,
    private dialog: MatDialog,
    private chatService: ChatService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.idLogged = this.authService.tokenDecoded.usuario.id
    
    this.mensagemService
      .mensagensLista()
      .subscribe(({ data }) => {
        this.messages = data['mensagemsLista']
      })
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
