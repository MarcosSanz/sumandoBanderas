import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia4',
  templateUrl: './sicilia4.component.html',
  styleUrls: ['./sicilia4.component.css']
})
export class Sicilia4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/IMG-0209.jpg';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0240.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG-0037.jpg';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0104.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0147.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0353.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/IMG-0209.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0240.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG-0037.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0104.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0147.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0353.jpg';
  titulo1 = 'Selinunte';
  titulo2 = 'Selinunte';
  titulo3 = 'Scala dei Turchi';
  titulo4 = 'Agrigento';
  titulo5 = 'Agrigento';
  titulo6 = 'Agrigento';

  siguiente = 'Valle de los Templos, Villa romana del Casale, Piazza Armerina y Noto';
  siguienteDonde = '/sicilia-dia-5';
  anterior = 'Corleone, Templo de Segesta, Erice y Trapani';
  anteriorDonde = '/sicilia-dia-3';

  constructor() { }

  ngOnInit() {
  }

}
