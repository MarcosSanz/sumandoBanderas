import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-york',
  templateUrl: './nueva-york.component.html',
  styleUrls: ['./nueva-york.component.css']
})
export class NuevaYorkComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Skyline de la Gran Manzana';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaNy/portada1.JPG';
  tituloCarrusel2 = 'Estatua de la Libertad';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaNy/portada2.JPG';
  tituloCarrusel3 = 'Flatirion building';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaNy/portada3.JPG';
  tituloCarrusel4 = 'Atardecer desde las alturas';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaNy/portada4.JPG';
  tituloCarrusel5 = 'Capitolio';
  descripcionCarrusel5 = 'Washington';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaNy/portada5.JPG';

  // Tarjetas de cada dia
  tituloDia1 = 'Día 1 - Ellis Island, Liberty Island & Lower Town';
  imagenDia1 = '../../../assets/imagenes/galeriaNy/portadadia1.JPG';
  enlaceDia1 = '/ny1';

  tituloDia2 = 'Día 2 - Central Park y Museo de Historia Natural';
  imagenDia2 = '../../../assets/imagenes/galeriaNy/portadadia2.JPG';
  enlaceDia2 = '/ny2';

  tituloDia3 = 'Día 3 - Times Square, Estacion Central y MOMA';
  imagenDia3 = '../../../assets/imagenes/galeriaNy/portadadia3.JPG';
  enlaceDia3 = '/ny3';

  tituloDia4 = 'Día 4 - Flatirion Building, Empire State, Top of the Rock';
  imagenDia4 = '../../../assets/imagenes/galeriaNy/portadadia4.JPG';
  enlaceDia4 = '/ny4';

  tituloDia5 = 'Día 5 - Harlem, Bronx y DUMBO';
  imagenDia5 = '../../../assets/imagenes/galeriaNy/portadadia5.JPG';
  enlaceDia5 = '/ny5';

  constructor() { }

  ngOnInit() {
  }

}
