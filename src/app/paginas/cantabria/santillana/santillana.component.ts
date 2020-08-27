import { Component } from '@angular/core';

@Component({
    selector: 'app-santillana',
    templateUrl: './santillana.component.html',
    styleUrls: ['./santillana.component.css']
})
export class SantillanaComponent {

    imagen1 = '../../../assets/imagenes/galeriaCantabria/santillana1.jpg';
    imagen2 = '../../../assets/imagenes/galeriaCantabria/santillana4.jpg';
    imagen3 = '../../../assets/imagenes/galeriaCantabria/santillana5.jpg';
    imagen4 = '../../../assets/imagenes/galeriaCantabria/santillana6.jpg';
    imagen5 = '../../../assets/imagenes/galeriaCantabria/santillana12.jpg';
    imagen6 = '../../../assets/imagenes/galeriaCantabria/santillana10.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaCantabria/santillana1.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaCantabria/santillana4.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaCantabria/santillana5.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaCantabria/santillana6.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaCantabria/santillana12.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaCantabria/santillana10.jpg';
    titulo1 = 'Universidad Pontificia de Comillas';
    titulo2 = 'Fuente de los tres caños, Comillas';
    titulo3 = 'Comillas';
    titulo4 = 'Comillas';
    titulo5 = 'Santillana del Mar';
    titulo6 = 'Santillana del Mar';

    siguiente = 'San Vicente de la Barquera';
    siguienteDonde = '/cantabria2016';
    anterior = 'Valle del Liébana con Potes';
    anteriorDonde = '/potes';

    constructor() { }

}
