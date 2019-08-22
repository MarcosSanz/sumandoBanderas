import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia9',
  templateUrl: './sicilia9.component.html',
  styleUrls: ['./sicilia9.component.css']
})
export class Sicilia9Component implements OnInit {

  siguiente = 'Cefalú y Monasterio de Monreale';
  siguienteDonde = '/sicilia-dia-10';
  anterior = 'Ruta del padrino, Taormina y Catania';
  anteriorDonde = '/sicilia-dia-8';

  constructor() { }

  ngOnInit() {
  }

}
