import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washington1',
  templateUrl: './washington1.component.html',
  styleUrls: ['./washington1.component.css']
})
export class Washington1Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/IMG_1061.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/IMG_5715.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/IMG_1072.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_1062.JPG';
  imagen5 = '../../../assets/imagenes/galeriaNy/IMG_1096.JPG';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_1074.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/IMG_1061.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/IMG_5715.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/IMG_1072.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_1062.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/IMG_1096.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_1074.JPG';
  titulo1 = 'Washington';
  titulo2 = 'Memorial al cuerpo de Marines U.S.';
  titulo3 = 'Barack Obama, helicóptero presidencial';
  titulo4 = 'Washington';
  titulo5 = 'Lincoln Memorial';
  titulo6 = 'National Mall';

  anterior = 'Harlem, Bronx y DUMBO';
  anteriorDonde = '/ny5';
  siguiente = 'National Mall';
  siguienteDonde = '/was2';

  constructor() { }

  ngOnInit() {
  }

}
