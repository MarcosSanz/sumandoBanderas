import { Component } from '@angular/core';

@Component({
  selector: 'app-portugal5',
  templateUrl: './portugal5.component.html',
  styleUrls: ['./portugal5.component.css']
})
export class Portugal5Component  {

  imagen1 = '../../../assets/imagenes/galeriaPortugal/belen-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaPortugal/belen-2.jpg';
  imagen3 = '../../../assets/imagenes/galeriaPortugal/belen-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaPortugal/belen-4.jpg';
  imagen5 = '../../../assets/imagenes/galeriaPortugal/belen-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaPortugal/belen-6.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaPortugal/belen-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaPortugal/belen-2.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaPortugal/belen-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaPortugal/belen-4.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaPortugal/belen-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaPortugal/belen-6.jpg';
  titulo1 = 'Plaza del comercio, Lisboa';
  titulo2 = 'Monasterio de los Jerónimos, Belém';
  titulo3 = 'Monumento a los conquistadores, Belém';
  titulo4 = 'Castillo San Jorge, Lisboa';
  titulo5 = 'Torre de Belém';
  titulo6 = 'Faro de Belém';

  siguiente = 'Cascaes y Lisboa';
  siguienteDonde = '/portugal-dia-6';
  anterior = 'Óbidos, Sintra y Lisboa';
  anteriorDonde = '/portugal-dia-4';

  constructor() { }

}
