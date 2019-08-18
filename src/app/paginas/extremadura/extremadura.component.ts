import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extremadura',
  templateUrl: './extremadura.component.html',
  styleUrls: ['./extremadura.component.css']
})
export class ExtremaduraComponent implements OnInit {

  // Carrusel de la portada
  tituloCarrusel1 = 'Trujillo';
  imagenCarrusel1 = '../../../assets/imagenes/galeriaExtremadura/IMG_2926.JPG';
  descripcion1 = 'Francisco de Orellana';
  tituloCarrusel2 = 'Mérida';
  imagenCarrusel2 = '../../../assets/imagenes/galeriaExtremadura/IMG_2996.JPG';
  descripcion2 = 'Acueducto romano';
  tituloCarrusel3 = 'Mérida';
  imagenCarrusel3 = '../../../assets/imagenes/galeriaExtremadura/IMG_2974.JPG';
  descripcion3 = 'Teatro romano';
  tituloCarrusel4 = 'Cáceres';
  imagenCarrusel4 = '../../../assets/imagenes/galeriaExtremadura/IMG_3033.JPG';
  tituloCarrusel5 = 'Cáceres';
  imagenCarrusel5 = '../../../assets/imagenes/galeriaExtremadura/IMG_3055.JPG';

  // Tarjetas de cada dia
  tituloDia1 = 'Día 1 - Trujillo';
  imagenDia1 = '../../../assets/imagenes/galeriaExtremadura/IMG_2932.JPG';
  enlaceDia1 = '/extremadura-dia-1';

  tituloDia2 = 'Día 2 - Mérida';
  imagenDia2 = '../../../assets/imagenes/galeriaExtremadura/IMG_2970.JPG';
  enlaceDia2 = '/extremadura-dia-2';

  tituloDia3 = 'Día 3 - Cáceres';
  imagenDia3 = '../../../assets/imagenes/galeriaExtremadura/IMG_3015.JPG';
  enlaceDia3 = '/extremadura-dia-3';

  constructor() { }

  ngOnInit() {
  }

}
