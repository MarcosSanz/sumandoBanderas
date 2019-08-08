import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny1',
  templateUrl: './ny1.component.html',
  styleUrls: ['./ny1.component.css']
})
export class Ny1Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/foto3.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/4.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/7.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_0573.JPG';
  imagen5 = '../../../assets/imagenes/galeriaNy/3.jpg';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_0613.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/foto3.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/4.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/7.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_0573.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/3.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_0613.JPG';
  titulo1 = 'Isla de Ellis';
  titulo2 = 'Wall Street';
  titulo3 = 'Little Italy';
  titulo4 = 'Viendo el skyline';
  titulo5 = 'The bull of Wall street';
  titulo6 = 'Times Square';

  siguiente = 'Central Park y Museo de Historia Natural';
  siguienteDonde = '/ny2';
  anterior = 'Portada del viaje';
  anteriorDonde = '/nueva-york';

  constructor() { }

  ngOnInit() {
  }

}
