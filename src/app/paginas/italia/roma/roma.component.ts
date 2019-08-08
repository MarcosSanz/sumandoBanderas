import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roma',
  templateUrl: './roma.component.html',
  styleUrls: ['./roma.component.css']
})
export class RomaComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Castel Sant´Angelo';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaRoma/portada1.JPG';
  tituloCarrusel2 = 'Arco de Constantino';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaRoma/portada2.JPG';
  tituloCarrusel3 = 'Coliseo';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaRoma/portada3.JPG';
  tituloCarrusel4 = 'Ciudad del Vaticano';
  descripcionCarrusel4 = 'Catedral de San Pedro';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaRoma/portada4.JPG';
  tituloCarrusel5 = 'Fontana di Trevi';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaRoma/portada5.JPG';

  // Tarjetas de cada dia
  tituloDia1 = 'Preparativos y llegada';
  imagenDia1 = '../../../assets/imagenes/galeriaRoma/IMG_2774.JPG';
  enlaceDia1 = '/roma-dia-1';

  tituloDia2 = 'Día 1 - Panteón, Coliseo, Foro, Palatino, Fontana di Trevi y Altare della Patria';
  imagenDia2 = '../../../assets/imagenes/galeriaRoma/IMG_2177.JPG';
  enlaceDia2 = '/roma-dia-2';

  tituloDia3 = 'Día 2 - Plaza Spagna, plaza del Popolo, Ciudad del Vaticano, Trastevere';
  imagenDia3 = '../../../assets/imagenes/galeriaRoma/IMG_2269.JPG';
  enlaceDia3 = '/roma-dia-3';

  tituloDia4 = 'Día 3 - Termas Diocleciano, Sta. Maria Mayor, S. Pietro in Vincoli';
  imagenDia4 = '../../../assets/imagenes/galeriaRoma/IMG_2801.JPG';
  enlaceDia4 = '/roma-dia-4';

  constructor() { }

  ngOnInit() {
  }

}
