import { Component } from '@angular/core';

@Component({
  selector: 'app-estocolmo-datos-viaje',
  templateUrl: './estocolmo-datos-viaje.component.html',
  styleUrls: ['./estocolmo-datos-viaje.component.css']
})
export class EstocolmoDatosViajeComponent {

  siguiente = 'Gamla Stan';
  siguienteDonde = '/estocolmo-dia-1';
  anterior = 'Portada del viaje';
  anteriorDonde = '/estocolmo';

  constructor() { }

}
