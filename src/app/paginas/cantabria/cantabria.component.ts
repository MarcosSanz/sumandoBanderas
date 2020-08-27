import { Component } from '@angular/core';

@Component({
    selector: 'app-cantabria',
    templateUrl: './cantabria.component.html',
    styleUrls: ['./cantabria.component.css']
})
export class CantabriaComponent {

    // Carrusel de la portada
    tituloCarrusel1 = 'Comillas';
    imagenCarrusel1 = '../../../assets/imagenes/galeriaCantabria/santillana3.jpg';
    tituloCarrusel2 = 'Potes';
    imagenCarrusel2 = '../../../assets/imagenes/galeriaCantabria/potes6.jpg';
    tituloCarrusel3 = 'Santillana del Mar';
    imagenCarrusel3 = '../../../assets/imagenes/galeriaCantabria/santillana9.jpg';
    tituloCarrusel4 = 'Santander';
    imagenCarrusel4 = '../../../assets/imagenes/galeriaCantabria/santander1.jpg';
    tituloCarrusel5 = 'San Vicente de la Barquera';
    imagenCarrusel5 = '../../../assets/imagenes/galeriaLeon/IMG_2507.JPG';

    // Tarjetas de cada dia

    tituloDia1 = 'Santander';
    imagenDia1 = '../../../assets/imagenes/galeriaCantabria/santander6.jpg';
    enlaceDia1 = '/santander';

    tituloDia3 = 'Valle del Liébana y Potes';
    imagenDia3 = '../../../assets/imagenes/galeriaCantabria/potes9.jpg';
    enlaceDia3 = '/potes';

    tituloDia4 = 'Santillana del Mar, Altamira y Comillas';
    imagenDia4 = '../../../assets/imagenes/galeriaCantabria/santillana13.jpg';
    enlaceDia4 = '/santillana';

    tituloDia2 = 'San Vicente de la Barquera (2016)';
    imagenDia2 = '../../../assets/imagenes/galeriaLeon/IMG_2507.JPG';
    enlaceDia2 = '/cantabria2016';

    constructor() { }

}
