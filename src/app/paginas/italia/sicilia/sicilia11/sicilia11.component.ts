import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia11',
  templateUrl: './sicilia11.component.html',
  styleUrls: ['./sicilia11.component.css']
})
export class Sicilia11Component implements OnInit {

  siguiente = 'Portada del viaje';
  siguienteDonde = '/sicilia';
  anterior = 'Cefalú y Palermo';
  anteriorDonde = '/sicilia-dia-10';

  constructor() { }

  ngOnInit() {
  }

}
