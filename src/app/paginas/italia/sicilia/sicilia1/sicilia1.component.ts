import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia1',
  templateUrl: './sicilia1.component.html',
  styleUrls: ['./sicilia1.component.css']
})
export class Sicilia1Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/IMG-0379.jpg';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0402.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG-0087.jpg';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0194.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0133.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0394.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/IMG-0379.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0402.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG-0087.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0194.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0133.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0394.jpg';
  titulo1 = 'Quattro Canti';
  titulo2 = 'Palacio de los normandos';
  titulo3 = 'Teatro di Palermo';
  titulo4 = 'Catedral di Palermo';
  titulo5 = 'Vistas desde lo alto de la Catedral';
  titulo6 = 'Calles de Palermo';

  siguiente = 'Corleone, Templo de Segesta, Erice y Trapani';
  siguienteDonde = '';
  anterior = 'Datos del viaje';
  anteriorDonde = '/sicilia-dia-1y2';

  constructor() { }

  ngOnInit() {
  }

}
