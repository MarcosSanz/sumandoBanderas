import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia8',
  templateUrl: './sicilia8.component.html',
  styleUrls: ['./sicilia8.component.css']
})
export class Sicilia8Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/IMG-0131.JPG';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0236.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG-0177.jpg';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0139.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0262.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0056.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/IMG-0131.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0236.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG-0177.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0139.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0262.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0056.jpg';
  titulo1 = 'Castello Degli Schiavi';
  titulo2 = 'Bar Vitelli, Savoca';
  titulo3 = 'Forza d´Agró';
  titulo4 = 'Teatro griego de Taormina';
  titulo5 = 'Vistas desde el Teatro griego de Taormina';
  titulo6 = 'Mercado de Taormina';

  siguiente = 'Enna y Palermo';
  siguienteDonde = '/sicilia-dia-9';
  anterior = 'Siracusa y Catania';
  anteriorDonde = '/sicilia-dia-7';

  constructor() { }

  ngOnInit() {
  }

}
