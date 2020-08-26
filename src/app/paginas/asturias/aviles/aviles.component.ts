import { Component } from '@angular/core';

@Component({
  selector: 'app-aviles',
  templateUrl: './aviles.component.html',
  styleUrls: ['./aviles.component.css']
})
export class AvilesComponent {

    imagen1 = '../../../assets/imagenes/galeriaAsturias/aviles8.jpg';
    imagen2 = '../../../assets/imagenes/galeriaAsturias/aviles5.jpg';
    imagen3 = '../../../assets/imagenes/galeriaAsturias/aviles3.jpg';
    imagen4 = '../../../assets/imagenes/galeriaAsturias/aviles1.jpg';
    imagen5 = '../../../assets/imagenes/galeriaAsturias/aviles4.jpg';
    imagen6 = '../../../assets/imagenes/galeriaAsturias/aviles6.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaAsturias/aviles8.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaAsturias/aviles5.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaAsturias/aviles3.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaAsturias/aviles1.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaAsturias/aviles4.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaAsturias/aviles6.jpg';
    titulo1 = 'San Antonio de Padúa';
    titulo2 = 'Escuela Superior de Arte';
    titulo3 = 'La monstrua';
    titulo4 = '';
    titulo5 = 'calle de Bances Candamo';
    titulo6 = 'San Nicolás de Bari';

    siguiente = 'Cangas, Covadonga, Bufones de Pría, playa de Guadamía, Cué';
    siguienteDonde = '/cangas';
    anterior = 'Gijón';
    anteriorDonde = '/gijon';

  constructor() { }

}