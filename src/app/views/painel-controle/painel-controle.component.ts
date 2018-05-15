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
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.escutaCategorias();
    this.escutaDesativacao();
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
