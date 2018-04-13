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
    private usuarioService: UsuarioService
  ) { }

  async ngOnInit() {
    this.defineEstiloMapa();
    this.carregarPedidos();
    
    this.usuarioService
      .me()
      .subscribe(({ data, loading }) => {
        if (!data) {
          return;
        }

        this.tipoPessoa = data.me.pessoa.tipo;
        this.centerLatitude = data.me.pessoa.enderecos[0].latitude
        this.centerLongitude = data.me.pessoa.enderecos[0].longitude
      });
      

    this.pedidoSocketSubs = this.pedidoService.pedidoSocket.subscribe((pedido: PedidoSocket) => {
      this.snack.open(`Opa opa! Pedido de categoria ${pedido.categoria.nome} acabou de sair do forno!`, 'UHUL!', {
        duration: 3000
      });
      this.carregarPedidos();
    })
  }

  abrirModalPedido() {
    const dialog = this.dialog.open(PedidoRegisterComponent, {
      width: '600px'
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
            this.pedidos = data['pedidosCategorias'];
          });
        break;
    }
  }

  defineEstiloMapa() {
    this.styles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ]
  }

  ngOnDestroy() {
    if (this.pedidoSocketSubs) this.pedidoSocketSubs.unsubscribe();
  }
}
