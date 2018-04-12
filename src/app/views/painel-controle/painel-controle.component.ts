import { PedidoService } from './../../services/core/pedido.service';
import { Categoria } from './../../domain/categoria';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Subscription } from 'rxjs/Subscription';

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
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.authS.tokenDecoded.usuario.pessoa.categorias.forEach((categoria: Categoria) => {
      console.log(`Escutando a categoria ${categoria.nome} - id ${categoria.id}`);

      const sub = this.socket.fromEvent(`categoria-${categoria.id}`).subscribe(({ pedido }) => {
        this.pedidoService.pedidoSocket.emit(pedido);
      })
      
      this.categoriasSubscriptions.push(sub);

    });
  }

  ngOnDestroy() {
    this.categoriasSubscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }


}
