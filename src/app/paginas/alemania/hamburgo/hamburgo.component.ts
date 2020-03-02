import { Component } from '@angular/core';

@Component({
    selector: 'app-hamburgo',
    templateUrl: './hamburgo.component.html',
    styleUrls: ['./hamburgo.component.css']
})
export class HamburgoComponent {

    // Carrusel de la portada
    tituloCarrusel1 = 'Hamburgo';
    imagenCarrusel1 = '../../../assets/imagenes/galeriaHamburgo/hamburgo1.jpg';
    tituloCarrusel2 = 'Sankt Pauli';
    imagenCarrusel2 = '../../../assets/imagenes/galeriaHamburgo/hamburgo3.jpg';
    tituloCarrusel3 = 'Stade';
    imagenCarrusel3 = '../../../assets/imagenes/galeriaHamburgo/stade.jpg';
    tituloCarrusel4 = 'Stade';
    imagenCarrusel4 = '../../../assets/imagenes/galeriaHamburgo/stade3.jpg';
    tituloCarrusel5 = 'Neuengamme';
    imagenCarrusel5 = '../../../assets/imagenes/galeriaHamburgo/neuengamme1.jpg';

    // Tarjetas de cada dia
    tituloDia1 = 'Día 1 - Hamburgo';
    imagenDia1 = '../../../assets/imagenes/galeriaHamburgo/hamburgo2.jpg';
    enlaceDia1 = '/hamburgo';

    tituloDia2 = 'Día 2 - Stade y Neuengamme';
    imagenDia2 = '../../../assets/imagenes/galeriaHamburgo/stade.jpg';
    enlaceDia2 = '/stade-y-neuengamme';

    tituloDia3 = 'Día 3 - Bremen';
    imagenDia3 = '../../../assets/imagenes/galeriaHamburgo/bremen1.jpg';
    enlaceDia3 = '/bremen';

    constructor() { }
}
