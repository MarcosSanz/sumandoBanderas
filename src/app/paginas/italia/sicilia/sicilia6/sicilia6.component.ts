import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia6',
  templateUrl: './sicilia6.component.html',
  styleUrls: ['./sicilia6.component.css']
})
export class Sicilia6Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/IMG-0288.jpg';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0362.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG-0231.jpg';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0333.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0383.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0032.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/IMG-0288.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0362.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG-0231.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0333.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0383.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0032.jpg';
  titulo1 = 'Necropoli di Pantalica';
  titulo2 = 'Ortigia, Siracusa';
  titulo3 = 'Duomo di Siracusa';
  titulo4 = 'Ortigia, Siracusa';
  titulo5 = 'Ortigia, Siracusa';
  titulo6 = 'Duomo di Siracusa';

  siguiente = 'Siracusa y Catania';
  siguienteDonde = '/sicilia-dia-7';
  anterior = 'Valle de los Templos, Villa romana del Casale, Piazza Armerina y Noto';
  anteriorDonde = '/sicilia-dia-5';

  constructor() { }

  ngOnInit() {
  }

}
