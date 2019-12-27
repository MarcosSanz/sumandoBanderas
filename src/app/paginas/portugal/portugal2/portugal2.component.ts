import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugal2',
  templateUrl: './portugal2.component.html',
  styleUrls: ['./portugal2.component.css']
})
export class Portugal2Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-2.jpg';
  imagen2 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-3.jpg';
  imagen3 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-5.jpg';
  imagen4 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-6.jpg';
  imagen5 = '../../../assets/imagenes/galeriaPortugal/.jpg';
  imagen6 = '../../../assets/imagenes/galeriaPortugal/.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-2.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-3.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-5.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-6.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaPortugal/.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaPortugal/.jpg';
  titulo1 = 'Oporto desde Gaia';
  titulo2 = 'Oporto desde Gaia';
  titulo3 = 'Oporto desde Gaia';
  titulo4 = 'Gaia desde Oporto';
  titulo5 = '';
  titulo6 = '';

  siguiente = 'Aveiro, Monasterio de Batalha y Nazaré';
  siguienteDonde = '/portugal-dia-3';
  anterior = 'Bragança y Oporto';
  anteriorDonde = '/portugal-dia-1';

  constructor() { }

  ngOnInit() {
  }

}
