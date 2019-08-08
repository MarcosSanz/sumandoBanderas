import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin2',
  templateUrl: './berlin2.component.html',
  styleUrls: ['./berlin2.component.css']
})
export class Berlin2Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaBerlin/IMG_2096.JPG';
  imagen2 = '../../../assets/imagenes/galeriaBerlin/IMG_2063.JPG';
  imagen3 = '../../../assets/imagenes/galeriaBerlin/IMG_2047.JPG';
  imagen4 = '../../../assets/imagenes/galeriaBerlin/IMG_2072.JPG';
  imagen5 = '../../../assets/imagenes/galeriaBerlin/IMG_2046.JPG';
  imagen6 = '../../../assets/imagenes/galeriaBerlin/IMG_2073.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaBerlin/IMG_2096.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaBerlin/IMG_2063.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaBerlin/IMG_2047.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaBerlin/IMG_2072.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaBerlin/IMG_2046.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaBerlin/IMG_2073.JPG';
  titulo1 = 'Treptower Park';
  titulo2 = 'Muro de Berlin';
  titulo3 = 'Memorial al holocausto';
  titulo4 = 'Charlie point';
  titulo5 = 'Monumento a los caídos soviéticos de Tiergarten';
  titulo6 = 'Semáforo de Potsdamer Platz';

  siguiente = 'Centro de Berlín, isla de los museos, barrio judío';
  siguienteDonde = '/berlin-dia-3';
  anterior = 'Datos del viaje';
  anteriorDonde = '/berlin-dia-1';


  constructor() { }

  ngOnInit() {
  }

}
