import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin5',
  templateUrl: './berlin5.component.html',
  styleUrls: ['./berlin5.component.css']
})
export class Berlin5Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaBerlin/IMG_2337.JPG';
  imagen2 = '../../../assets/imagenes/galeriaBerlin/IMG_2339.JPG';
  imagen3 = '../../../assets/imagenes/galeriaBerlin/IMG_2343.JPG';
  imagen4 = '../../../assets/imagenes/galeriaBerlin/IMG_2340.JPG';
  imagen5 = '../../../assets/imagenes/galeriaBerlin/IMG_2335.JPG';
  imagen6 = '../../../assets/imagenes/galeriaBerlin/IMG_2336.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaBerlin/IMG_2337.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaBerlin/IMG_2339.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaBerlin/IMG_2343.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaBerlin/IMG_2340.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaBerlin/IMG_2335.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaBerlin/IMG_2336.JPG';
  titulo1 = '"El trabajo os hará libres"';
  titulo2 = 'Placa a los españoles muertos en el campo';
  titulo3 = 'Entrada a la cámara de gas';
  titulo4 = 'Enfermeria del campo';
  titulo5 = 'Traje soldado del campo';
  titulo6 = 'Entrada al campo';

  siguiente = 'Portada del viaje';
  siguienteDonde = '/berlin';
  anterior = 'Potsdam y Berlín de noche';
  anteriorDonde = '/berlin-dia-4';

  constructor() { }

  ngOnInit() {
  }

}
