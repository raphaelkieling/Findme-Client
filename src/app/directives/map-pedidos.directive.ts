import { Pedido } from './../domain/pedido';
import { GoogleMapsAPIWrapper, MarkerManager, AgmMarker } from '@agm/core';
import { Directive, Input } from '@angular/core';
import { GoogleMap, Marker } from '@agm/core/services/google-maps-types';

@Directive({
  selector: '[appMapPedidos]'
})
export class MapPedidosDirective {
  @Input() pedidos: Pedido[];

  googleMap: GoogleMap;
  markers: Marker;

  constructor(
    private googleAPIWrapper: GoogleMapsAPIWrapper,
    private markerManager: MarkerManager
  ) {
    this.googleAPIWrapper.getNativeMap()
      .then(map => {
        this.googleMap = map;

        this.googleMap.addListener('click', () => console.log('oi'));
      })
  }

  ngOnInit() {
    console.log(this.pedidos);
  }

  ngOnChanges() {
    this.pedidos.forEach((pedido) => {
      console.log('pedido adicionado marker')
      let marker = new AgmMarker(this.markerManager);
      marker.latitude = pedido.latitude;
      marker.longitude = pedido.longitude;
      marker.clickable = true;

      this.markerManager.addMarker(marker)
    })
  }

}
