import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin4',
  templateUrl: './berlin4.component.html',
  styleUrls: ['./berlin4.component.css']
})
export class Berlin4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaBerlin/IMG_2310.JPG';
  imagen2 = '../../../assets/imagenes/galeriaBerlin/IMG_2305.JPG';
  imagen3 = '../../../assets/imagenes/galeriaBerlin/IMG_2307.JPG';
  imagen4 = '../../../assets/imagenes/galeriaBerlin/IMG_2261.JPG';
  imagen5 = '../../../assets/imagenes/galeriaBerlin/IMG_2317.JPG';
  imagen6 = '../../../assets/imagenes/galeriaBerlin/IMG_2324.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaBerlin/IMG_2310.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaBerlin/IMG_2305.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaBerlin/IMG_2307.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaBerlin/IMG_2261.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaBerlin/IMG_2317.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaBerlin/IMG_2324.JPG';
  titulo1 = 'Barrio Holandés';
  titulo2 = 'Nikolaikirche';
  titulo3 = 'Cementerio a los soldados soviéticos';
  titulo4 = 'Puente de los espías';
  titulo5 = 'Puerta de Brandemburgo';
  titulo6 = 'Reichstag';

  siguiente = 'Campo de concentración, Sachsenhausen';
  siguienteDonde = '/berlin-dia-5';
  anterior = 'Centro de Berlín, isla de los museos, barrio judío';
  anteriorDonde = '/berlin-dia-3';

  constructor() { }

  ngOnInit() {
  }

}
