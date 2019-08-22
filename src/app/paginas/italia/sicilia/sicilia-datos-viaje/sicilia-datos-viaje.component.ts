import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia-datos-viaje',
  templateUrl: './sicilia-datos-viaje.component.html',
  styleUrls: ['./sicilia-datos-viaje.component.css']
})
export class SiciliaDatosViajeComponent implements OnInit {

  siguiente = 'Palermo';
  siguienteDonde = '/sicilia-dia-1y2';
  anterior = 'Portada del viaje';
  anteriorDonde = '/sicilia';

  constructor() { }

  ngOnInit() {
  }

}
