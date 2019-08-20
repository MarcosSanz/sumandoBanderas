import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia3',
  templateUrl: './sicilia3.component.html',
  styleUrls: ['./sicilia3.component.css']
})
export class Sicilia3Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/34010.jpg';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0192.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG-0100.jpg';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0109.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0043.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0084.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/34010.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0192.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG-0100.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0109.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0043.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0084.jpg';
  titulo1 = 'Corleone';
  titulo2 = 'Templo de Segesta';
  titulo3 = 'Castello di Venere, Erice';
  titulo4 = 'Chiesa Madre, Erice';
  titulo5 = 'Erice';
  titulo6 = 'Teatro de Segesta';

  siguiente = 'Selinunte, Villa Romana dei Casale, Agrigento';
  siguienteDonde = '/sicilia';
  anterior = 'Corleone, Templo de Segesta, Erice y Trapani';
  anteriorDonde = '/sicilia-dia-1y2';

  constructor() { }

  ngOnInit() {
  }

}
