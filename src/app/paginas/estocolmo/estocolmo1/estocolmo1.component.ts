import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estocolmo1',
  templateUrl: './estocolmo1.component.html',
  styleUrls: ['./estocolmo1.component.css']
})
export class Estocolmo1Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6860.JPG';
  imagen2 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-3.JPG';
  imagen3 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-2.JPG';
  imagen4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6929.JPG';
  imagen5 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1.JPG';
  imagen6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6955.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6860.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-3.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-2.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6929.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6955.JPG';
  titulo1 = 'Mercado de Hötorget';
  titulo2 = 'Palaco Real';
  titulo3 = 'Academia Sueca, casa del Nobel';
  titulo4 = 'Catedral de San Nicolás';
  titulo5 = 'Östra riksdagshuset';
  titulo6 = 'National Museum';

  siguiente = 'Birka';
  siguienteDonde = '/estocolmo-dia-2';
  anterior = 'Datos y conclusiones del viaje';
  anteriorDonde = '/estocolmo-datos-viaje';

  constructor() { }

  ngOnInit() {
  }

}
