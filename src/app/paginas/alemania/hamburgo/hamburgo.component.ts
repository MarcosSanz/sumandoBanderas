import { Component } from '@angular/core';

@Component({
    selector: 'app-hamburgo',
    templateUrl: './hamburgo.component.html',
    styleUrls: ['./hamburgo.component.css']
})
export class HamburgoComponent {

    // Carrusel de la portada
    tituloCarrusel1 = 'Boston';
    imagenCarrusel1 = '../../../assets/imagenes/galeriaHamburgo/hamburgo1.jpg';
    descripcion1 = 'Massachusetts State House';
    tituloCarrusel2 = 'Philadelphia';
    imagenCarrusel2 = '../../../assets/imagenes/galeriaHamburgo/hamburgo3.jpg';
    descripcion2 = 'Parque Love';
    tituloCarrusel3 = 'Washington D.C.';
    imagenCarrusel3 = '../../../assets/imagenes/galeriaHamburgo/dia6-5.jpg';
    descripcion3 = 'Capitolio';
    tituloCarrusel4 = 'Nueva York';
    imagenCarrusel4 = '../../../assets/imagenes/galeriaHamburgo/dia7-3.jpg';
    tituloCarrusel5 = 'Brooklyn';
    imagenCarrusel5 = '../../../assets/imagenes/galeriaHamburgo/dia9-5.jpg';

    // Tarjetas de cada dia
    tituloDia1 = 'Día 1 - Hamburgo';
    imagenDia1 = '../../../assets/imagenes/galeriaHamburgo/hamburgo2.jpg';
    enlaceDia1 = '/hamburgo';

    tituloDia2 = 'Día 2 - Stade y Neuengamme';
    imagenDia2 = '../../../assets/imagenes/galeriaHamburgo/dia1-1.jpg';
    enlaceDia2 = '/stade-y-neuengamme';

    //   tituloDia3 = 'Día 3 - Bremen';
    //   imagenDia3 = '../../../assets/imagenes/galeriaHamburgo/dia2-1.jpg';
    //   enlaceDia3 = '/bremen';

    constructor() { }
}
