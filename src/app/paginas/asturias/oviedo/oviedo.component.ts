import { Component } from '@angular/core';

@Component({
    selector: 'app-oviedo',
    templateUrl: './oviedo.component.html',
    styleUrls: ['./oviedo.component.css']
})
export class OviedoComponent {

    imagen1 = '../../../assets/imagenes/galeriaAsturias/oviedo3.jpg';
    imagen2 = '../../../assets/imagenes/galeriaAsturias/oviedo6.jpg';
    imagen3 = '../../../assets/imagenes/galeriaAsturias/oviedo5.jpg';
    imagen4 = '../../../assets/imagenes/galeriaAsturias/oviedo4.jpg';
    imagen5 = '../../../assets/imagenes/galeriaAsturias/oviedo7.jpg';
    imagen6 = '../../../assets/imagenes/galeriaAsturias/oviedo8.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaAsturias/oviedo3.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaAsturias/oviedo6.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaAsturias/oviedo5.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaAsturias/oviedo4.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaAsturias/oviedo7.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaAsturias/oviedo8.jpg';
    titulo1 = 'Santa María del Naranco';
    titulo2 = 'San Miguel de Lillo';
    titulo3 = 'Mafalda';
    titulo4 = 'Catedral de Oviedo';
    titulo5 = 'El viajero';
    titulo6 = 'Plaza del Ayuntamiento';

    siguiente = 'Gijón';
    siguienteDonde = '/gijon';
    anterior = 'Asturias';
    anteriorDonde = '/asturias';

    constructor() { }


}
