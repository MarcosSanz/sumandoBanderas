import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia7',
  templateUrl: './sicilia7.component.html',
  styleUrls: ['./sicilia7.component.css']
})
export class Sicilia7Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/IMG-0044.jpg';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0045.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG_0442.JPG';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0354.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0232.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0360.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/IMG-0044.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0045.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG_0442.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0354.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0232.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0360.jpg';
  titulo1 = 'Teatro griego de Siracusa';
  titulo2 = 'Oreja de Dionisio';
  titulo3 = 'Anfiteatro griego de Siracusa';
  titulo4 = 'Teatro romano de Catania';
  titulo5 = 'Catania';
  titulo6 = 'Catania';

  siguiente = 'Ruta del padrino, Taormina y Catania';
  siguienteDonde = '/sicilia-dia-8';
  anterior = 'Necropoli di Pantalica y Siracusa';
  anteriorDonde = '/sicilia-dia-6';

  constructor() { }

  ngOnInit() {
  }

}
