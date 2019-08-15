import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin',
  templateUrl: './berlin.component.html',
  styleUrls: ['./berlin.component.css']
})
export class BerlinComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Reichstag';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaBerlin/portada1.JPG';
  tituloCarrusel2 = 'Muro deíBerlin';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaBerlin/portada2.JPG';
  tituloCarrusel3 = 'Potsdam';
  descripcionCarrusel3 = 'Palacio de Orangerieschloss';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaBerlin/portada3.JPG';
  tituloCarrusel4 = 'Campo de concentración de Sachsenhausen';
  descripcionCarrusel4 = 'Memorial a los caídos en el campo de Sachsenhausen';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaBerlin/portada4.JPG';
  tituloCarrusel5 = 'Catedral de Berlín';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaBerlin/portada5.JPG';

  // Tarjetas de cada dia
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaBerlin/IMG_2284.JPG';
  enlaceDia1 = '/berlin-dia-1';

  tituloDia2 = 'Día 1 - Treptower Park, East Side Galery, CheckPoint Charlie, Topografia del Terror';
  imagenDia2 = '../../../assets/imagenes/galeriaBerlin/IMG_2063.JPG';
  enlaceDia2 = '/berlin-dia-2';

  tituloDia3 = 'Día 2 - Centro de Berlín, isla de los museos, barrio judío';
  imagenDia3 = '../../../assets/imagenes/galeriaBerlin/IMG_2171.JPG';
  enlaceDia3 = '/berlin-dia-3';

  tituloDia4 = 'Día 3 - Potsdam y Berlín de noche';
  imagenDia4 = '../../../assets/imagenes/galeriaBerlin/IMG_2295.JPG';
  enlaceDia4 = '/berlin-dia-4';

  tituloDia5 = 'Día 4 - Campo de concentración, Sachsenhausen';
  imagenDia5 = '../../../assets/imagenes/galeriaBerlin/IMG_2337.JPG';
  enlaceDia5 = '/berlin-dia-5';

  // Cuentas
  vuelos = '204,00 €';
  hoteles = '141,00 €';
  comidas = '126,90 €';
  entradas = '95,00 €';
  transportes = '34,15 €';
  suma = '601,05 €';

  constructor() { }

  ngOnInit() {
  }

}
