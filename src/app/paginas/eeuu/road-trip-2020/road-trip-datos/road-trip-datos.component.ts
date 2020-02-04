import { Component } from '@angular/core';

@Component({
  selector: 'app-road-trip-datos',
  templateUrl: './road-trip-datos.component.html',
  styleUrls: ['./road-trip-datos.component.css']
})
export class RoadTripDatosComponent {

    siguiente = 'Viaje y Bostón';
    siguienteDonde = '/roadtrip-eeuu-dia-1';
    anterior = 'Portada del viaje';
    anteriorDonde = '/roadtrip-eeuu';

  constructor() { }
}
