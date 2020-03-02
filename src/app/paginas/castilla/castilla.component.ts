import { Component } from '@angular/core';

@Component({
    selector: 'app-castilla',
    templateUrl: './castilla.component.html',
    styleUrls: ['./castilla.component.css']
})
export class CastillaComponent {

    // Carrusel de la portada
    tituloCarrusel1 = 'Ávila';
    imagenCarrusel1 = '../../../assets/imagenes/galeriaAvila/avila12.jpg';
    tituloCarrusel2 = 'Ávila';
    imagenCarrusel2 = '../../../assets/imagenes/galeriaAvila/avila16.jpg';
    tituloCarrusel3 = 'León';
    imagenCarrusel3 = '../../../assets/imagenes/galeriaLeon/IMG_4191.JPG';
    tituloCarrusel4 = 'Cuenca';
    imagenCarrusel4 = '../../../assets/imagenes/galeriaCastilla/cuenca2.jpg';
    tituloCarrusel5 = 'Segóbriga';
    imagenCarrusel5 = '../../../assets/imagenes/galeriaCastilla/segobriga.jpg';

    // Tarjetas de cada dia
    tituloDia1 = '1 Día en Ávila';
    imagenDia1 = '../../../assets/imagenes/galeriaAvila/avila14.jpg';
    enlaceDia1 = '/avila';

    tituloDia2 = '1 Día en León';
    imagenDia2 = '../../../assets/imagenes/galeriaLeon/IMG_4176.JPG';
    enlaceDia2 = '/leon';

    tituloDia3 = '2 Días en Cuenca y Segóbriga';
    imagenDia3 = '../../../assets/imagenes/galeriaCastilla/cuenca5.jpg';
    enlaceDia3 = '/cuenca';

    constructor() { }
}
