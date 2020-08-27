import { Component } from '@angular/core';

@Component({
    selector: 'app-cantabria',
    templateUrl: './cantabria.component.html',
    styleUrls: ['./cantabria.component.css']
})
export class CantabriaComponent {

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

    tituloDia1 = 'Santander';
    imagenDia1 = '../../../assets/imagenes/galeriaAsturias/oviedo1.jpg';
    enlaceDia1 = '/santander';

    tituloDia3 = 'Valle del Liébana y Potes';
    imagenDia3 = '../../../assets/imagenes/galeriaAsturias/aviles2.jpg';
    enlaceDia3 = '/potes';

    tituloDia4 = 'Santillana del Mar, Altamira y Comillas';
    imagenDia4 = '../../../assets/imagenes/galeriaLeon/IMG_2501.JPG';
    enlaceDia4 = '/santillana';

    tituloDia2 = 'San Vicente de la Barquera (2016)';
    imagenDia2 = '../../../assets/imagenes/galeriaLeon/IMG_2507.JPG';
    enlaceDia2 = '/cantabria2016';

    constructor() { }

}
