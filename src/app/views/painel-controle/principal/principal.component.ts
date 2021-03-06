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
import { Usuario } from '../../../domain/usuario';
import { Chat } from '../../../domain/chat';
import { OrcamentoPedidoService } from '../../../services/core/orcamentoPedido.service';
import { OrcamentoPedido } from '../../../domain/orcamentoPedido';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @ViewChild('map') agmMap: AgmMap;

  loadingPedidos = false;

  pedidos: Pedido[] = [];

  pedidosFinalizados: Pedido[] = [];

  orcamentos: OrcamentoPedido[] = [];

  tipoPessoa: TipoUsuario | string;

  styles: MapTypeStyle[] = [];

  infoWindowOpened: InfoWindow = null;

  pedidoSocketSubs: Subscription;

  centerLatitude: number;

  centerLongitude: number;

  cardSelecionado: Pedido;

  menuAberto: Boolean = true;

  imageDefault = 'assets/images/avatar.jpg';

  constructor(
    private dialog: MatDialog,
    private pedidoService: PedidoService,
    private authService: AuthService,
    private snack: MatSnackBar,
    private usuarioService: UsuarioService,
    private chatService: ChatService,
    private orcamentoService: OrcamentoPedidoService
  ) { }

  async ngOnInit() {
    this.defineEstiloMapa();
    if (!this.authService.tokenDecoded.usuario.pessoa) return;

    await this.buscaUsuario();
    this.carregarPedidos();
    this.carregarPedidoPendentesOrcamento();

    this.pedidoSocketSubs = this.pedidoService.pedidoSocket.subscribe((pedido: PedidoSocket) => {
      this.snack.open(`Opa opa! Pedido de categoria ${pedido.categoria.nome} acabou de sair do forno!`, 'UHUL!', {
        duration: 3000
      });
      this.carregarPedidos();
    })
  }

  private buscaUsuario() {
    return new Promise((resolve, reject) => {
      this.usuarioService
        .me()
        .subscribe(({ data, loading }) => {
          if (!data || !data['me'].pessoa) {
            return;
          }
          this.tipoPessoa = data['me'].pessoa.tipo;
          if (data['me'].pessoa.enderecos.length > 0) {
            this.centerLatitude = data['me'].pessoa.enderecos[0].latitude;
            this.centerLongitude = data['me'].pessoa.enderecos[0].longitude;
          }

          resolve()
        });
    })
  }

  abrirChat(usuario: Usuario, pedido: Pedido) {
    let chat = new Chat(usuario, pedido)
    this.chatService.addChat(chat);
  }

  abrirModalPedido(pedido) {
    const dialog = this.dialog.open(PedidoRegisterComponent, {
      width: '600px',
      height: '500px',
      data: {
        pedido
      }
    });
  }

  carregarPedidoPendentesOrcamento() {
    this.orcamentoService
      .orcamentosPendentes()
      .subscribe(({ data, loading }) => {
        this.orcamentos = data['orcamentosPendentes']
      })
  }

  markerPedidoClicado(pedido: Pedido, infoWindow: InfoWindow) {
    if (this.infoWindowOpened === infoWindow)
      return;

    if (this.infoWindowOpened !== null)
      this.infoWindowOpened.close();

    this.infoWindowOpened = infoWindow;
  }

  carregarPedidos() {
    this.loadingPedidos = true;
    let categoriasUsadas = this.authService.tokenDecoded.usuario.pessoa.categorias.map((categoria) => categoria.id);

    switch (this.tipoPessoa) {
      case TipoUsuario.CLIENTE:
        this.pedidoService
          .pedidosCliente()
          .subscribe(({ data, loading }) => {
            this.loadingPedidos = false;
            this.pedidos = data['pedidosCliente'];
          });

        this.pedidoService
          .pedidosClienteFinalizados()
          .subscribe(({ data, loading }) => {
            this.loadingPedidos = false;
            this.pedidosFinalizados = data['pedidosClienteFinalizados'];
          });
        break;

      case TipoUsuario.PROFISSIONAL:
        this.pedidoService
          .pedidosCategorias(categoriasUsadas)
          .subscribe(({ data, loading }) => {
            this.loadingPedidos = false;
            this.pedidos = data['pedidosCategorias'];
          });
        break;
    }
  }

  openPerfil(cliente: Usuario) {
    this.dialog.open(PerfilComponent, {
      data: cliente,
      width: '600px',
      height: '500px'
    });
  }

  defineEstiloMapa() {
    this.styles = []
  }

  isCardAberto(pedido: Pedido) {
    return this.cardSelecionado === pedido;
  }

  selecionarCard(pedido: Pedido) {
    if (this.cardSelecionado === pedido)
      this.cardSelecionado = undefined;
    else
      this.cardSelecionado = pedido;
  }

  cancelarPedido(pedidoId) {
    this.pedidoService
      .cancelarPedido(pedidoId)
      .subscribe(console.log)
  }

  aceitarOrcamento(pedidoId) {
    this.orcamentoService
      .aceitarOrcamento(pedidoId)
      .subscribe(console.log)
  }

  cancelaOrcamento(pedidoId) {
    this.orcamentoService
      .cancelarOrcamento(pedidoId)
      .subscribe(console.log)
  }

  ngOnDestroy() {
    if (this.pedidoSocketSubs) this.pedidoSocketSubs.unsubscribe();
  }
}
