import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugal-datos-viaje',
  templateUrl: './portugal-datos-viaje.component.html',
  styleUrls: ['./portugal-datos-viaje.component.css']
})
export class PortugalDatosViajeComponent implements OnInit {

  siguiente = 'Brangança y Oporto';
  siguienteDonde = '/portugal-dia-1';
  anterior = 'Portada del viaje';
  anteriorDonde = '/portugal';

  constructor() { }

  ngOnInit() {
  }

}
