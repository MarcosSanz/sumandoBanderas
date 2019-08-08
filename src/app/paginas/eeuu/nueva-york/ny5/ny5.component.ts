import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny5',
  templateUrl: './ny5.component.html',
  styleUrls: ['./ny5.component.css']
})
export class Ny5Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaNy/IMG_1036.JPG';
  imagen2 = '../../../assets/imagenes/galeriaNy/IMG_1039.JPG';
  imagen3 = '../../../assets/imagenes/galeriaNy/IMG_1048.JPG';
  imagen4 = '../../../assets/imagenes/galeriaNy/IMG_1044.JPG';
  imagen5 = '../../../assets/imagenes/galeriaNy/IMG_1055.JPG';
  imagen6 = '../../../assets/imagenes/galeriaNy/IMG_1059.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaNy/IMG_1036.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaNy/IMG_1039.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaNy/IMG_1048.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaNy/IMG_1044.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaNy/IMG_1055.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaNy/IMG_1059.JPG';
  titulo1 = 'Harlem';
  titulo2 = 'Teatro Apollo';
  titulo3 = 'The Bronx';
  titulo4 = 'The Bronx';
  titulo5 = 'zona 0';
  titulo6 = 'Dumbo';

  anterior = 'Puente de Brooklyn, Flatirion Building, Empire State, Top of the Rock';
  anteriorDonde = '/ny4';
  siguiente = 'Cementerio de Arlington y National Mall';
  siguienteDonde = '/was1';

  constructor() { }

  ngOnInit() {
  }

}
