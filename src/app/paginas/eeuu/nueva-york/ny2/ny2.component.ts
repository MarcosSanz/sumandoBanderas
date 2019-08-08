import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny2',
  templateUrl: './ny2.component.html',
  styleUrls: ['./ny2.component.css']
})
export class Ny2Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/IMG_0645.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/IMG_0667.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/IMG_0680.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_0658.JPG';
  imagen5 = '../../../assets/imagenes/galeriaNy/IMG_0662.JPG';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_0649.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/IMG_0645.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/IMG_0667.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/IMG_0680.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_0658.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/IMG_0662.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_0649.JPG';
  titulo1 = 'Central Park';
  titulo2 = 'Hans Christian Andersen, Central Park';
  titulo3 = 'Memorial 7º Regimiento, Central Park';
  titulo4 = 'Central Park';
  titulo5 = 'Castillo Belvedere, Central Park';
  titulo6 = 'Homenaje a John Lenon, Central Park';

  anterior = 'Ellis Island, Liberty Island & Lower Town';
  anteriorDonde = '/ny1';
  siguiente = 'Times Square, Estacion Central y MOMA';
  siguienteDonde = '/ny3';

  constructor() { }

  ngOnInit() {
  }

}
