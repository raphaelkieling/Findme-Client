import { UsuarioService } from './../../../services/core/usuario.service';
import { PedidoSocket } from './../../../domain/pedidoSocket';
import { TipoUsuario } from './../../../domain/tipo';
import { Pedido } from './../../../domain/pedido';
import { PedidoService } from './../../../services/core/pedido.service';
import { PedidoRegisterComponent } from './../pedido/pedido-register/pedido-register.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import { MapTypeStyle, AgmMap, MarkerManager, AgmMarker, GoogleMapsAPIWrapper } from '@agm/core';
import { MarkerOptions, InfoWindow } from '@agm/core/services/google-maps-types';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PerfilComponent } from '../../../components/perfil/perfil.component';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @ViewChild('map') agmMap: AgmMap;

  loadingPedidos = false;

  pedidos: Pedido[] = [];

  tipoPessoa: TipoUsuario | string;

  styles: MapTypeStyle[] = [];

  infoWindowOpened: InfoWindow = null;

  pedidoSocketSubs: Subscription;

  centerLatitude: number;

  centerLongitude: number;

  constructor(
    private dialog: MatDialog,
    private pedidoService: PedidoService,
    private authService: AuthService,
    private markerManager: MarkerManager,
    private gmapsAPI: GoogleMapsAPIWrapper,
    private snack: MatSnackBar,
    private usuarioService: UsuarioService,
    private chatService: ChatService
  ) { }

  async ngOnInit() {
    this.defineEstiloMapa();
    this.centralizaMapa();

    this.pedidoSocketSubs = this.pedidoService.pedidoSocket.subscribe((pedido: PedidoSocket) => {
      this.snack.open(`Opa opa! Pedido de categoria ${pedido.categoria.nome} acabou de sair do forno!`, 'UHUL!', {
        duration: 3000
      });
      this.carregarPedidos();
    })
  }

  private centralizaMapa() {
    this.usuarioService
      .me()
      .subscribe(({ data, loading }) => {
        if (!data) {
          return;
        }
        this.tipoPessoa = data['me'].pessoa.tipo;
        this.centerLatitude = data['me'].pessoa.enderecos[0].latitude;
        this.centerLongitude = data['me'].pessoa.enderecos[0].longitude;
        this.carregarPedidos();
      });
  }

  abrirChat(usuario){
    this.chatService.addChat(usuario);
  }

  abrirModalPedido() {
    const dialog = this.dialog.open(PedidoRegisterComponent, {
      width: '600px',
      height: '500px'
    });
  }

  markerPedidoClicado(pedido: Pedido, infoWindow: InfoWindow) {
    if (this.infoWindowOpened === infoWindow)
      return;

    if (this.infoWindowOpened !== null)
      this.infoWindowOpened.close();

    this.infoWindowOpened = infoWindow;
  }

  carregarPedidos() {
    let categoriasUsadas = this.authService.tokenDecoded.usuario.pessoa.categorias.map((categoria) => categoria.id);

    switch (this.tipoPessoa) {
      case TipoUsuario.CLIENTE:
        this.pedidoService
          .pedidosCliente()
          .subscribe(({ data, loading }) => {
            this.loadingPedidos = loading;
            this.pedidos = data['pedidosCliente'];
          });
        break;

      case TipoUsuario.PROFISSIONAL:
        this.pedidoService
          .pedidosCategorias(categoriasUsadas)
          .subscribe(({ data, loading }) => {
            this.loadingPedidos = loading;
            console.log(data);
            this.pedidos = data['pedidosCategorias'];
          });
        break;
    }
  }

  openPerfil(pedido: Pedido) {
    this.dialog.open(PerfilComponent, {
      data: pedido.cliente,
      width: '600px',
      height: '500px'
    });
  }

  defineEstiloMapa() {
    this.styles = []
  }

  ngOnDestroy() {
    if (this.pedidoSocketSubs) this.pedidoSocketSubs.unsubscribe();
  }
}
