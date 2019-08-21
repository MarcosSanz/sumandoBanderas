import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia',
  templateUrl: './sicilia.component.html',
  styleUrls: ['./sicilia.component.css']
})
export class SiciliaComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Agrigento';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaSicilia/IMG-0315.jpg';
  descripcion1 = 'Valle de los Reyes';
  tituloCarrusel2 = 'Siracusa';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaSicilia/IMG-0044.jpg';
  descripcion2 = 'Teatro Griego';
  tituloCarrusel3 = 'Palermo';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaSicilia/IMG-0121.jpg';
  descripcion3 = 'Vistas desde la catedral';
  tituloCarrusel4 = 'Corleone';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaSicilia/IMG-0210.jpg';
  tituloCarrusel5 = 'Erice';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaSicilia/IMG-0361.jpg';

  // Tarjetas de cada dia
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaSicilia/sicilia-turismo.jpg';
  enlaceDia1 = '/sicilia-datos-viaje';

  tituloDia2 = 'Día 1 y 2 - Palermo';
  imagenDia2 = '../../../assets/imagenes/galeriaSicilia/IMG-0060.jpg';
  enlaceDia2 = '/sicilia-dia-1y2';

  tituloDia4 = 'Día 3 - Corleone, Templo de Segesta, Erice y Trapani';
  imagenDia4 = '../../../assets/imagenes/galeriaSicilia/IMG-0113.jpg';
  enlaceDia4 = '/sicilia-dia-3';

  tituloDia5 = 'Día 4 - Selinunte, Scala dei Turchi y Agrigento';
  imagenDia5 = '../../../assets/imagenes/galeriaSicilia/IMG-0165.jpg';
  enlaceDia5 = '/sicilia-dia-4';

  tituloDia6 = 'Día 5 - Valle de los Templos, Villa romana del Casale, y Noto';
  imagenDia6 = '../../../assets/imagenes/galeriaSicilia/IMG-0042.jpg';
  enlaceDia6 = '/sicilia-dia-5';

  tituloDia7 = 'Día 6 - Siracusa';
  imagenDia7 = '../../../assets/imagenes/galeriaSicilia/IMG-0351.jpg';
  enlaceDia7 = '';

  tituloDia8 = 'Día 7 - Siracusa y Catania';
  imagenDia8 = '../../../assets/imagenes/galeriaSicilia/IMG_0232.jpg';
  enlaceDia8 = '';

  tituloDia9 = 'Día 8 - Ruta del Padrino, Taormina y Catania';
  imagenDia9 = '../../../assets/imagenes/galeriaSicilia/IMG-0200.jpg';
  enlaceDia9 = '';

  tituloDia10 = 'Día 9 - Enna';
  imagenDia10 = '../../../assets/imagenes/galeriaSicilia/IMG_0551.JPG';
  enlaceDia10 = '';

  tituloDia11 = 'Día 10 - Cefalú y Monasterio de Monreale';
  imagenDia11 = '../../../assets/imagenes/galeriaSicilia/IMG_0564.JPG';
  enlaceDia11 = '';

   // Cuentas
   vuelos = '188,00€';
   hoteles = '408,00€';
   comidas = '511,00€';
   entradas = '93,00€';
   transportes = '449,00€';
   suma = '1.675,00€';

  constructor() { }

  ngOnInit() {
  }

}
