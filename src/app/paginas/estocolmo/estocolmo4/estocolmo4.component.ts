import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estocolmo4',
  templateUrl: './estocolmo4.component.html',
  styleUrls: ['./estocolmo4.component.css']
})
export class Estocolmo4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7589.JPG';
  imagen3 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-3.JPG';
  imagen4 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-5.JPG';
  imagen5 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-6.JPG';
  imagen6 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-8.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7589.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-3.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-5.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-6.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaEstocolmo/estdia4-8.JPG';
  titulo1 = 'Palacio de Drottningholm';
  titulo2 = 'Palacio de Drottningholm';
  titulo3 = 'Puente de las Coronas';
  titulo4 = 'Gamla Stan';
  titulo5 = 'Gamla Stan';
  titulo6 = 'Stortorget, Gamla Stan';

  siguiente = 'Estocolmo';
  siguienteDonde = '/estocolmo-dia-5';
  anterior = 'Isla de los Museos, Cambio de Guardia, Palacio Real y Catedral de San Nicolás';
  anteriorDonde = '/estocolmo-dia-3';

  constructor() { }

  ngOnInit() {
  }

}
