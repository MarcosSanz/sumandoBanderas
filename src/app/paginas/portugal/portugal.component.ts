import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.component.html',
  styleUrls: ['./portugal.component.css']
})
export class PortugalComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Sintra';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaPortugal/sintra-2.jpg';
  descripcion1 = 'Palacio da pena';
  tituloCarrusel2 = 'Oporto';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-1.jpg';
  descripcion2 = 'Puente Luis I';
  tituloCarrusel3 = 'Óbidos';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaPortugal/obidos-dia-1.jpg';
  tituloCarrusel4 = 'Aveiro';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaPortugal/aveiro-1.jpg';
  tituloCarrusel5 = 'Monasterio de Batalha';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaPortugal/batalha-2.jpg';

  // Tarjetas de cada dia
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-9.jpg';
  enlaceDia1 = '/portugal-datos-viaje';

  tituloDia2 = 'Día 1 - Brangança y Oporto';
  imagenDia2 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-1-11.jpg';
  enlaceDia2 = '/portugal-dia-1';

  tituloDia3 = 'Día 2 - Oporto';
  imagenDia3 = '../../../assets/imagenes/galeriaPortugal/oporto-dia-2-1.jpg';
  enlaceDia3 = '/portugal-dia-2';

  tituloDia4 = 'Día 3 - Aveiro, Monasterio de Batalha y Nazaré';
  imagenDia4 = '../../../assets/imagenes/galeriaPortugal/aveiro-3.jpg';
  enlaceDia4 = '/portugal-dia-3';

  tituloDia5 = 'Día 4 - Óbidos, Sintra y Lisboa';
  imagenDia5 = '../../../assets/imagenes/galeriaPortugal/obidos-dia-1-3.jpg';
  enlaceDia5 = '/portugal-dia-4';

  tituloDia6 = 'Día 5 - Belém y Lisboa';
  imagenDia6 = '../../../assets/imagenes/galeriaPortugal/IMG-7817.JPG';
  enlaceDia6 = '/portugal-dia-5';

  tituloDia7 = 'Día 6 - Cascais y Lisboa';
  imagenDia7 = '../../../assets/imagenes/galeriaPortugal/IMG-7817.JPG';
  enlaceDia7 = '/portugal-dia-6';

   // Cuentas
   vuelos = '-';
   hoteles = '378,75€';
   comidas = '345,58€';
   entradas = '80,90€';
   transportes = '240,06€';
   suma = '1.096,03€';

  constructor() { }

  ngOnInit() {
  }

}
