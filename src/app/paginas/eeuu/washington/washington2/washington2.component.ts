import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washington2',
  templateUrl: './washington2.component.html',
  styleUrls: ['./washington2.component.css']
})
export class Washington2Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/IMG_1159.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/IMG_1190.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/IMG_1217.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_1222.JPG';
  imagen5 = '../../../assets/imagenes/galeriaNy/IMG_1224.JPG';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_5859.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/IMG_1159.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/IMG_1190.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/IMG_1217.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_1222.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/IMG_1224.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_5859.JPG';
  titulo1 = 'Memorial a los veteranos de Vietnam';
  titulo2 = 'F.B.I. Building';
  titulo3 = 'Vietnam War Meorial';
  titulo4 = 'Korean War Meorial';
  titulo5 = 'Martin Luther King Meorial';
  titulo6 = 'White House';

  anterior = 'Cementerio de Arlington y National Mall';
  anteriorDonde = '/was1';

  constructor() { }

  ngOnInit() {
  }

}
