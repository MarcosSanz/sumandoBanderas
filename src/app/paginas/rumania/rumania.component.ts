import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania',
  templateUrl: './rumania.component.html',
  styleUrls: ['./rumania.component.css']
})
export class RumaniaComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Sofia, Bulgaria';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaRumania/bul-2-7.jpg';
  tituloCarrusel2 = 'Transfăgărășan, Rumania';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaRumania/rum-4-4.jpg';
  tituloCarrusel3 = 'Castillo Pelisor, Rumania';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaRumania/rum-6-4.jpg';
  tituloCarrusel4 = 'Cementerio Alegre, Rumania';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaRumania/rum-8-5.jpg';
  tituloCarrusel5 = 'Monasterio de Rila, Bulgaria';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaRumania/portada1.jpg';

  // Tarjetas de cada dia
  tituloDia1 = 'Datos del viaje';
  imagenDia1 = '../../../assets/imagenes/galeriaRumania/portadadia1.jpg';
  enlaceDia1 = '/rumania-datos-viaje';

  tituloDia2 = 'Día 1 - Llegada a Bucureşti, por los pelos';
  imagenDia2 = '../../../assets/imagenes/galeriaRumania/portadadia2.jpg';
  enlaceDia2 = '/rumania-dia-1';

  tituloDia3 = 'Día 2 - Curtea de Arges, Castillo Vlad Tepes y Transfăgărășan';
  imagenDia3 = '../../../assets/imagenes/galeriaRumania/rum15.jpg';
  enlaceDia3 = '/rumania-dia-2';

  tituloDia4 = 'Día 3 - Transfăgărășan, Făgăraș y Braşov';
  imagenDia4 = '../../../assets/imagenes/galeriaRumania/rum1.jpg';
  enlaceDia4 = '/rumania-dia-3';

  tituloDia5 = 'Día 4 - Braşov, Castillo de Bran, Prejmer, Hărman';
  imagenDia5 = '../../../assets/imagenes/galeriaRumania/rum-5-8.jpg';
  enlaceDia5 = '/rumania-dia-4';

  tituloDia6 = 'Día 5 - Castillo Peleș, Castillo Pelisor, Sinaia y Sighișoara';
  imagenDia6 = '../../../assets/imagenes/galeriaRumania/rum-6-2.jpg';
  enlaceDia6 = '/rumania-dia-5';

  tituloDia7 = 'Día 6 - Iglesia de Valea Viilor, Mediaş, Iglesia de Biertan y Sighişoara';
  imagenDia7 = '../../../assets/imagenes/galeriaRumania/rum-7-5.jpg';
  enlaceDia7 = '/rumania-dia-6';

  tituloDia8 = 'Día 7 - Maramureş, Cementerio Alegre y Baia Mare';
  imagenDia8 = '../../../assets/imagenes/galeriaRumania/rum-8-2.jpg';
  enlaceDia8 = '/rumania-dia-7';

  tituloDia9 = 'Día 8 - Cluj-Napoca, Aiud y Alba Iulia';
  imagenDia9 = '../../../assets/imagenes/galeriaRumania/rum-9-1.jpg';
  enlaceDia9 = '/rumania-dia-8';

  tituloDia10 = 'Día 9 - Castillo Corvinilor y Sibiu';
  imagenDia10 = '../../../assets/imagenes/galeriaRumania/rum-10-2.jpg';
  enlaceDia10 = '/rumania-dia-9';

  tituloDia11 = 'Día 10 - Bucureşti';
  imagenDia11 = '../../../assets/imagenes/galeriaRumania/rum-11-5.jpg';
  enlaceDia11 = '/rumania-dia-10';

  tituloBulgaria = 'Día 11 - Frontera y Sofia por la noche';
  imagenBulgaria = '../../../assets/imagenes/galeriaRumania/bulgariadia0.jpg';
  enlaceBulgaria = '/bulgaria-dia-1';

  tituloBulgaria2 = 'Día 12 - Sofia';
  imagenBulgaria2 = '../../../assets/imagenes/galeriaRumania/bul-2-7.jpg';
  enlaceBulgaria2 = '/bulgaria-dia-2';

  tituloBulgaria3 = 'Día 13 - Monasterio de Rila y Sofía';
  imagenBulgaria3 = '../../../assets/imagenes/galeriaRumania/bulportada.jpg';
  enlaceBulgaria3 = '/bulgaria-dia-3';

   // Cuentas
   vuelos = '159,86 €';
   hoteles = '508,82 €';
   comidas = '401,91 €';
   entradas = '95,88 €';
   transportes = '511,32 €';
   suma = '1.852,86 €';

  constructor() { }

  ngOnInit() {
  }

}
