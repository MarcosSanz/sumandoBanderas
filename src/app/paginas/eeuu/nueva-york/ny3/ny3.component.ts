import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny3',
  templateUrl: './ny3.component.html',
  styleUrls: ['./ny3.component.css']
})
export class Ny3Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/IMG_0748.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/IMG_0754.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/IMG_0690.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_0696.JPG';
  imagen5 = '../../../assets/imagenes/galeriaNy/IMG_0623.JPG';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_0670.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/IMG_0748.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/IMG_0754.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/IMG_0690.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_0696.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/IMG_0623.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_0670.JPG';
  titulo1 = 'Grand Central Terminal';
  titulo2 = 'Naciones Unidas';
  titulo3 = 'Señoritas de Avignon, MOMA';
  titulo4 = 'Malcom X, MOMA';
  titulo5 = 'Radio City';
  titulo6 = 'MOMA';

  anterior = 'Central Park y Museo de Historia Natural';
  anteriorDonde = '/ny2';
  siguiente = 'Puente de Brooklyn, Flatirion Building, Empire State, Top of the Rock';
  siguienteDonde = '/ny4';

  constructor() { }

  ngOnInit() {
  }

}
