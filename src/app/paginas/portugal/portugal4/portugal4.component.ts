import { Component } from '@angular/core';

@Component({
  selector: 'app-portugal4',
  templateUrl: './portugal4.component.html',
  styleUrls: ['./portugal4.component.css']
})
export class Portugal4Component {

  imagen1 = '../../../assets/imagenes/galeriaPortugal/sintra-11.jpg';
  imagen2 = '../../../assets/imagenes/galeriaPortugal/sintra-5.jpg';
  imagen3 = '../../../assets/imagenes/galeriaPortugal/sintra-9.jpg';
  imagen4 = '../../../assets/imagenes/galeriaPortugal/sintra-3.jpg';
  imagen5 = '../../../assets/imagenes/galeriaPortugal/sintra-8.jpg';
  imagen6 = '../../../assets/imagenes/galeriaPortugal/sintra-10.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaPortugal/sintra-11.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaPortugal/sintra-5.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaPortugal/sintra-9.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaPortugal/sintra-3.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaPortugal/sintra-8.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaPortugal/sintra-10.jpg';
  titulo1 = 'Castillo Óbidos';
  titulo2 = 'Óbidos';
  titulo3 = 'Palacio da pena';
  titulo4 = 'Palacio da pena';
  titulo5 = 'Palacio da Regaladeira';
  titulo6 = 'Jardines palacio da pena';

  siguiente = 'Belém y Lisboa';
  siguienteDonde = '/portugal-dia-5';
  anterior = 'Aveiro, Monasterio de Batalha y Nazaré';
  anteriorDonde = '/portugal-dia-3';

  constructor() { }

}
