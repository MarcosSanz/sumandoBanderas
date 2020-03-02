import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estocolmo',
  templateUrl: './estocolmo.component.html',
  styleUrls: ['./estocolmo.component.css']
})
export class EstocolmoComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Palacio Real de Estocolmo';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7437.JPG';
  tituloCarrusel2 = 'Metro de Estocolmo';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaEstocolmo/Snapseed.JPG';
  descripcion2 = 'Solna Centrum';
  tituloCarrusel3 = 'Ayuntamiento de Estocolmo';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7153.jpg';
  tituloCarrusel4 = 'Gamla Stan';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6938.jpg';
  tituloCarrusel5 = 'Stortorget';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7817.JPG';
  descripcion5 = 'Gamla Stan';

  // Tarjetas de cada dia
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaEstocolmo/marcosElVikingo.JPG';
  enlaceDia1 = '/estocolmo-datos-viaje';

  tituloDia2 = 'Día 1 - Gamla Stan';
  imagenDia2 = '../../../assets/imagenes/galeriaEstocolmo/IMG-6923.JPG';
  enlaceDia2 = '/estocolmo-dia-1';

  tituloDia3 = 'Día 2 - Birka';
  imagenDia3 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7119.jpg';
  enlaceDia3 = '/estocolmo-dia-2';

  tituloDia4 = 'Día 3 - Isla de los Museos';
  imagenDia4 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7316.JPG';
  enlaceDia4 = '/estocolmo-dia-3';

  tituloDia5 = 'Día 4 - Palacio de Drottningholm';
  imagenDia5 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7589.JPG';
  enlaceDia5 = '/estocolmo-dia-4';

  tituloDia6 = 'Día 5 - Stadsbibliotek y Skeppsholmsbron';
  imagenDia6 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7817.JPG';
  enlaceDia6 = '/estocolmo-dia-5';

   // Cuentas
   vuelos = '382,01€';
   hoteles = '304,50€';
   comidas = '308,19€';
   entradas = '234,54€';
   transportes = '118,22€';
   suma = '1.370,59€';

  constructor() { }

  ngOnInit() {
  }

}
