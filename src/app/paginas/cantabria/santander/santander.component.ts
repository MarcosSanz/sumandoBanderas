import { Component } from '@angular/core';

@Component({
    selector: 'app-santander',
    templateUrl: './santander.component.html',
    styleUrls: ['./santander.component.css']
})
export class SantanderComponent {

    imagen1 = '../../../assets/imagenes/galeriaBerlin/IMG_2134.JPG';
    imagen2 = '../../../assets/imagenes/galeriaBerlin/IMG_2171.JPG';
    imagen3 = '../../../assets/imagenes/galeriaBerlin/IMG_2138.JPG';
    imagen4 = '../../../assets/imagenes/galeriaBerlin/IMG_2186.JPG';
    imagen5 = '../../../assets/imagenes/galeriaBerlin/IMG_2194.JPG';
    imagen6 = '../../../assets/imagenes/galeriaBerlin/IMG_2164.JPG';
    imagenModal1 = '../../../assets/imagenes/galeriaBerlin/IMG_2134.JPG';
    imagenModal2 = '../../../assets/imagenes/galeriaBerlin/IMG_2171.JPG';
    imagenModal3 = '../../../assets/imagenes/galeriaBerlin/IMG_2138.JPG';
    imagenModal4 = '../../../assets/imagenes/galeriaBerlin/IMG_2186.JPG';
    imagenModal5 = '../../../assets/imagenes/galeriaBerlin/IMG_2194.JPG';
    imagenModal6 = '../../../assets/imagenes/galeriaBerlin/IMG_2164.JPG';
    titulo1 = 'Ayuntamiento';
    titulo2 = 'Vistas de Berlín desde la Catedral';
    titulo3 = 'Zona alternativa';
    titulo4 = 'Monumento a Marx y Engels';
    titulo5 = 'Catedral de Berlín';
    titulo6 = 'KulturBrauerei';

    siguiente = 'Valle del Liébana con Potes';
    siguienteDonde = '/potes';
    anterior = 'Cantabria';
    anteriorDonde = '/cantabria';

    constructor() { }

}
