import { Component } from '@angular/core';

@Component({
    selector: 'app-cangas',
    templateUrl: './cangas.component.html',
    styleUrls: ['./cangas.component.css']
})
export class CangasComponent {
    imagen1 = '../../../assets/imagenes/galeriaAsturias/cangas1.jpg';
    imagen2 = '../../../assets/imagenes/galeriaAsturias/cangas2.jpg';
    imagen3 = '../../../assets/imagenes/galeriaAsturias/cangas3.jpg';
    imagen4 = '../../../assets/imagenes/galeriaAsturias/covadonga.jpg';
    imagen5 = '../../../assets/imagenes/galeriaAsturias/cangas5.jpg';
    imagen6 = '../../../assets/imagenes/galeriaAsturias/cangas6.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaAsturias/cangas1.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaAsturias/cangas2.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaAsturias/cangas3.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaAsturias/covadonga.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaAsturias/cangas5.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaAsturias/cangas6.jpg';
    titulo1 = 'Playa de Guadamía';
    titulo2 = 'Covadonga';
    titulo3 = 'Bufones de Pría';
    titulo4 = 'Covadonga';
    titulo5 = 'Playa de Cué';
    titulo6 = 'Atardecer desde la playa de Cué';

    siguiente = 'Llanes, playa del Cobijero, playa de Gulpiyuri, Mirador del Fitu';
    siguienteDonde = '/llanes';
    anterior = 'Avilés';
    anteriorDonde = '/aviles';

    constructor() { }

}