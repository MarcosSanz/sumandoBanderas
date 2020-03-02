import { Component } from '@angular/core';

@Component({
  selector: 'app-estocolmo1',
  templateUrl: './estocolmo1.component.html',
  styleUrls: ['./estocolmo1.component.css']
})
export class Estocolmo1Component {

  imagen1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6860.jpg';
  imagen2 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-3.jpg';
  imagen3 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-2.jpg';
  imagen4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6929.jpg';
  imagen5 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1.jpg';
  imagen6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6955.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6860.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-3.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1-2.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6929.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaEstocolmo/estocdia1.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6955.jpg';
  titulo1 = 'Mercado de Hötorget';
  titulo2 = 'Palacio Real';
  titulo3 = 'Academia Sueca, casa del Nobel';
  titulo4 = 'Catedral de San Nicolás';
  titulo5 = 'Östra Riksdagshuset';
  titulo6 = 'National Museum';

  siguiente = 'Birka';
  siguienteDonde = '/estocolmo-dia-2';
  anterior = 'Datos y conclusiones del viaje';
  anteriorDonde = '/estocolmo-datos-viaje';

  constructor() { }

}
