import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia10',
  templateUrl: './sicilia10.component.html',
  styleUrls: ['./sicilia10.component.css']
})
export class Sicilia10Component implements OnInit {

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

  siguiente = 'Portada del viaje';
  siguienteDonde = '/sicilia';
  anterior = 'Enna';
  anteriorDonde = '/sicilia-dia-9';

  constructor() { }

  ngOnInit() {
  }

}
