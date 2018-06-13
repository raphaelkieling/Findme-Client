import { PedidoSocket } from './../../domain/pedidoSocket';
import { PedidoService } from './../../services/core/pedido.service';
import { Categoria } from './../../domain/categoria';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatService } from '../../services/chat.service';
import { Usuario } from '../../domain/usuario';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit {

  categoriasSubscriptions: Subscription[] = [];

  constructor(
    private socket: Socket,
    private authS: AuthService,
    private pedidoService: PedidoService,
    private loginService: LoginService,
    private router: Router,
    private snack: MatSnackBar,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.escutaCategorias();
    this.escutaDesativacao();
    this.escutaChat();
  }

  fechaChat(chat){
    console.log(chat);
    this.chatService.removeChat(chat.id);
  }

  get chats(){
    return this.chatService.chats
  }

  private escutaChat(){
    this.socket.fromEvent(`chat-send-${this.authS.tokenDecoded.usuario.id}`).subscribe((data) => {
      this.chatService.addChatPeloId(data['usuario_enviou']);
    })
  }

  private escutaDesativacao() {
    console.log(`logout-user-${this.authS.tokenDecoded.usuario.id}`);
    this.socket.fromEvent(`logout-user-${this.authS.tokenDecoded.usuario.id}`).subscribe(() => {
      const snack = this.snack.open('Você foi desativado do sistema, contate o suporte hehe', 'Chamar suporte!');
      snack.onAction().subscribe(() => console.log('indo até o suporte'));

      this.loginService.logout();
      this.router.navigate(['/']);
    })
  }

  private escutaCategorias() {
    if(!this.authS.tokenDecoded.usuario.pessoa) return;
    this.authS.tokenDecoded.usuario.pessoa.categorias.forEach((categoria: Categoria) => {
      console.log(`Escutando a categoria ${categoria.nome} - id ${categoria.id}`);
      const sub = this.socket.fromEvent(`categoria-${categoria.id}`).subscribe((pedidoSocket: PedidoSocket) => {
        this.pedidoService.pedidoSocket.emit(pedidoSocket);
      });
      this.categoriasSubscriptions.push(sub);
    });
  }

  ngOnDestroy() {
    this.categoriasSubscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }


}
