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
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaNy/IMG_2284.JPG';
  enlaceDia1 = '/berlin-dia-1';

  tituloDia2 = 'Día 1 - Treptower Park, East Side Galery, CheckPoint Charlie, Topografia del Terror';
  imagenDia2 = '../../../assets/imagenes/galeriaNy/IMG_2063.JPG';
  enlaceDia2 = '/berlin-dia-2';

  tituloDia3 = 'Día 2 - Centro de Berlín, isla de los museos, barrio judío';
  imagenDia3 = '../../../assets/imagenes/galeriaNy/IMG_2171.JPG';
  enlaceDia3 = '/berlin-dia-3';

  tituloDia4 = 'Día 3 - Potsdam y Berlín de noche';
  imagenDia4 = '../../../assets/imagenes/galeriaNy/IMG_2295.JPG';
  enlaceDia4 = '/berlin-dia-4';

  tituloDia5 = 'Día 4 - Campo de concentración, Sachsenhausen';
  imagenDia5 = '../../../assets/imagenes/galeriaNy/IMG_2337.JPG';
  enlaceDia5 = '/berlin-dia-5';

  constructor() { }

  ngOnInit() {
  }

}
