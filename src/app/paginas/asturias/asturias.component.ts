import { Component } from '@angular/core';

@Component({
    selector: 'app-asturias',
    templateUrl: './asturias.component.html',
    styleUrls: ['./asturias.component.css']
})
export class AsturiasComponent {

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

    tituloDia1 = 'Oviedo';
    imagenDia1 = '../../../assets/imagenes/galeriaAvila/avila14.jpg';
    enlaceDia1 = '/oviedo';

    tituloDia2 = 'Gijón';
    imagenDia2 = '../../../assets/imagenes/galeriaLeon/IMG_4176.JPG';
    enlaceDia2 = '/gijon';

    tituloDia3 = 'Avilés';
    imagenDia3 = '../../../assets/imagenes/galeriaCastilla/cuenca5.jpg';
    enlaceDia3 = '/aviles';

    tituloDia5 = 'Cangas, Covadonga, Bufones de Pría, playa de Guadamía, playa de Cué';
    imagenDia5 = '../../../assets/imagenes/galeriaAvila/avila14.jpg';
    enlaceDia5 = '/cangas';

    tituloDia6 = 'Llanes, playa del Cobijero, playa de Gulpiyuri, Mirador del Fitu';
    imagenDia6 = '../../../assets/imagenes/galeriaAvila/avila14.jpg';
    enlaceDia6 = '/llanes';

    tituloDia4 = 'Llanes, Cué, Ribadesella y Cudillero (2016)';
    imagenDia4 = '../../../assets/imagenes/galeriaAvila/avila14.jpg';
    enlaceDia4 = '/asturias2016';

    constructor() { }
}
