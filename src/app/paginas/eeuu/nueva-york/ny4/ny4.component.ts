import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny4',
  templateUrl: './ny4.component.html',
  styleUrls: ['./ny4.component.css']
})
export class Ny4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/IMG_0809.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/IMG_0798.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/IMG_1015.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_0769.jpg';
  imagen5 = '../../../assets/imagenes/galeriaNy/IMG_0774.JPG';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_0879.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/IMG_0809.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/IMG_0798.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/IMG_1015.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_0769.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/IMG_0774.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_0879.JPG';
  titulo1 = 'Top of the Rock, vistas al sur';
  titulo2 = 'Top of the Rock';
  titulo3 = 'Top of the Rock, nocturno';
  titulo4 = 'Empire State Building';
  titulo5 = 'Flatirion Building';
  titulo6 = 'Puente de Brooklyn';

  anterior = 'Times Square, Estación Central y MOMA';
  anteriorDonde = '/ny3';
  siguiente = 'Harlem, Bronx y DUMBO';
  siguienteDonde = '/ny5';

  constructor() { }

  ngOnInit() {
  }

}
