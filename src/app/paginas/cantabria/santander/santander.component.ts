import { Component } from '@angular/core';

@Component({
    selector: 'app-santander',
    templateUrl: './santander.component.html',
    styleUrls: ['./santander.component.css']
})
export class SantanderComponent {

    imagen1 = '../../../assets/imagenes/galeriaCantabria/santander1.jpg';
    imagen2 = '../../../assets/imagenes/galeriaCantabria/santander2.jpg';
    imagen3 = '../../../assets/imagenes/galeriaCantabria/santander3.jpg';
    imagen4 = '../../../assets/imagenes/galeriaCantabria/santander4.jpg';
    imagen5 = '../../../assets/imagenes/galeriaCantabria/santander5.jpg';
    imagen6 = '../../../assets/imagenes/galeriaCantabria/santander6.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaCantabria/santander1.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaCantabria/santander2.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaCantabria/santander3.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaCantabria/santander4.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaCantabria/santander5.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaCantabria/santander6.jpg';
    titulo1 = 'Los raqueros';
    titulo2 = 'Catedral de Santander';
    titulo3 = '';
    titulo4 = '';
    titulo5 = 'Centro Botín';
    titulo6 = '';

    siguiente = 'Valle del Liébana con Potes';
    siguienteDonde = '/potes';
    anterior = 'Cantabria';
    anteriorDonde = '/cantabria';

    constructor() { }

}
