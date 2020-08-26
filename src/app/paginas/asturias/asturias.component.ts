import { Component } from '@angular/core';

@Component({
    selector: 'app-asturias',
    templateUrl: './asturias.component.html',
    styleUrls: ['./asturias.component.css']
})
export class AsturiasComponent {

    // Carrusel de la portada
    tituloCarrusel1 = 'Santa Cueva de Covadonga';
    imagenCarrusel1 = '../../../assets/imagenes/galeriaAsturias/covadonga.jpg';
    tituloCarrusel2 = 'Santa María del Naranco, Oviedo';
    imagenCarrusel2 = '../../../assets/imagenes/galeriaAsturias/naranco.jpg';
    tituloCarrusel3 = 'Gijón';
    imagenCarrusel3 = '../../../assets/imagenes/galeriaAsturias/gijon.jpg';
    tituloCarrusel4 = 'Avilés';
    imagenCarrusel4 = '../../../assets/imagenes/galeriaAsturias/aviles.jpg';
    tituloCarrusel5 = 'Playa de Cobijero';
    imagenCarrusel5 = '../../../assets/imagenes/galeriaAsturias/cobijero.jpg';

    // Tarjetas de cada dia

    tituloDia1 = 'Oviedo';
    imagenDia1 = '../../../assets/imagenes/galeriaAsturias/oviedo1.jpg';
    enlaceDia1 = '/oviedo';

    tituloDia2 = 'Gijón';
    imagenDia2 = '../../../assets/imagenes/galeriaAsturias/gijon2.jpg';
    enlaceDia2 = '/gijon';

    tituloDia3 = 'Avilés';
    imagenDia3 = '../../../assets/imagenes/galeriaAsturias/aviles.jpg';
    enlaceDia3 = '/aviles';

    tituloDia5 = 'Cangas de Onis, Covadonga, Bufones de Pría, playa de Guadamía, playa de Cué';
    imagenDia5 = '../../../assets/imagenes/galeriaAsturias/covadonga.jpg';
    enlaceDia5 = '/cangas';

    tituloDia6 = 'Llanes, playa del Cobijero, playa de Gulpiyuri, mirador del Fitu';
    imagenDia6 = '../../../assets/imagenes/galeriaAsturias/cobijero.jpg';
    enlaceDia6 = '/llanes';

    tituloDia4 = 'Llanes, Cué, Ribadesella y Cudillero (2016)';
    imagenDia4 = '../../../assets/imagenes/galeriaLeon/IMG_2501.JPG';
    enlaceDia4 = '/asturias2016';

    constructor() { }
}
