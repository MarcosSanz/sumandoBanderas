import { Component } from '@angular/core';

@Component({
  selector: 'app-road-trip',
  templateUrl: './road-trip.component.html',
  styleUrls: ['./road-trip.component.css']
})
export class RoadTripComponent {

    // Carrusel de la portada
  tituloCarrusel1 = 'Boston';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaEEUU/dia2-17.jpg';
  descripcion1 = 'Massachusetts State House';
  tituloCarrusel2 = 'Philadelphia';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaEEUU/dia3-6.jpg';
  descripcion2 = 'Parque Love';
  tituloCarrusel3 = 'Washington D.C.';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaEEUU/dia6-5.jpg';
  descripcion3 = 'Capitolio';
  tituloCarrusel4 = 'Nueva York';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaEEUU/dia7-3.jpg';
  tituloCarrusel5 = 'Brooklyn';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaEEUU/dia9-5.jpg';

    // Tarjetas de cada dia
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaEEUU/dia6-2.jpg';
  enlaceDia1 = '/roadtrip-eeuu-datos-viaje';

  tituloDia2 = 'Día 1 - Viaje y Bostón';
  imagenDia2 = '../../../assets/imagenes/galeriaEEUU/dia1-1.jpg';
  enlaceDia2 = '/roadtrip-eeuu-dia-1';

  tituloDia3 = 'Día 2 - Salem y Bostón';
  imagenDia3 = '../../../assets/imagenes/galeriaEEUU/dia2-1.jpg';
  enlaceDia3 = '/roadtrip-eeuu-dia-2';

  tituloDia4 = 'Día 3 - Outlet y Philadelphia';
  imagenDia4 = '../../../assets/imagenes/galeriaEEUU/dia3-1.jpg';
  enlaceDia4 = '/roadtrip-eeuu-dia-3';

  tituloDia5 = 'Día 4 - Philadelphia, Amish y Gettysburg';
  imagenDia5 = '../../../assets/imagenes/galeriaEEUU/dia4-1.jpg';
  enlaceDia5 = '/roadtrip-eeuu-dia-4';

  tituloDia6 = 'Día 5 - Washington';
  imagenDia6 = '../../../assets/imagenes/galeriaEEUU/dia5-1.jpg';
  enlaceDia6 = '/roadtrip-eeuu-dia-5';

  tituloDia7 = 'Día 6 - Arlington y New York';
  imagenDia7 = '../../../assets/imagenes/galeriaEEUU/dia7-1.jpg';
  enlaceDia7 = '/roadtrip-eeuu-dia-6';

  tituloDia8 = 'Día 7 - Times Square, Empire State, Gran Central Terminal';
  imagenDia8 = '../../../assets/imagenes/galeriaEEUU/dia8-1.jpg';
  enlaceDia8 = '/roadtrip-eeuu-dia-7';

  tituloDia9 = 'Día 8 - E.Libertad, I.Ellis, Puente Brooklyn, Chinatown, Little Italy, MoMa';
  imagenDia9 = '../../../assets/imagenes/galeriaEEUU/dia9-1.jpg';
  enlaceDia9 = '/roadtrip-eeuu-dia-8';

  tituloDia10 = 'Día 9 - Wall Street, Museo Hª Natural y Central Park';
  imagenDia10 = '../../../assets/imagenes/galeriaEEUU/dia10-1.jpg';
  enlaceDia10 = '/roadtrip-eeuu-dia-9';

  tituloDia11 = 'Día 10 - Harlem';
  imagenDia11 = '../../../assets/imagenes/galeriaEEUU/dia11-1.jpg';
  enlaceDia11 = '/roadtrip-eeuu-dia-10';

    // Cuentas
   vuelos = '865.96€';
   hoteles = '1249.51€';
   comidas = '1242.51€';
   entradas = '283.44€';
   transportes = '1425.63€';
   suma = '5287.65€';

  constructor() { }

}
