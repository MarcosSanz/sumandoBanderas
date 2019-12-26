import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugal3',
  templateUrl: './portugal3.component.html',
  styleUrls: ['./portugal3.component.css']
})
export class Portugal3Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaPortugal/bragança.jpg';
  imagen2 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-2.jpg';
  imagen3 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-9.jpg';
  imagen5 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-10.jpg';
  imagen6 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-4.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaPortugal/bragança.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-2.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-9.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-10.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-4.jpg';
  titulo1 = 'Bragança';
  titulo2 = 'Vistas desde el Puente Luis I';
  titulo3 = 'Vistas desde Gaia';
  titulo4 = 'Vistas de Oporto, desde Gaia';
  titulo5 = 'Estación de Sao Bento';
  titulo6 = 'Vistas nocturnas de Oporto';

  siguiente = 'Óbidos, Sintra y Lisboa';
  siguienteDonde = '/portugal-dia-4';
  anterior = 'Oporto';
  anteriorDonde = '/portugal-dia-2';

  constructor() { }

  ngOnInit() {
  }

}
