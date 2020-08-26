import { Component } from '@angular/core';

@Component({
  selector: 'app-gijon',
  templateUrl: './gijon.component.html',
  styleUrls: ['./gijon.component.css']
})
export class GijonComponent {

    imagen1 = '../../../assets/imagenes/galeriaAsturias/gijon4.jpg';
    imagen2 = '../../../assets/imagenes/galeriaAsturias/gijon3.jpg';
    imagen3 = '../../../assets/imagenes/galeriaAsturias/gijon5.jpg';
    imagen4 = '../../../assets/imagenes/galeriaAsturias/gijon6.jpg';
    imagen5 = '../../../assets/imagenes/galeriaAsturias/gijon7.jpg';
    imagen6 = '../../../assets/imagenes/galeriaAsturias/gijon8.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaAsturias/gijon4.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaAsturias/gijon3.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaAsturias/gijon5.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaAsturias/gijon6.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaAsturias/gijon7.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaAsturias/gijon8.jpg';
    titulo1 = 'Plaza Mayor';
    titulo2 = 'Iglesia de San Pedro Apóstol';
    titulo3 = 'Vistas desde Santa Catalina';
    titulo4 = 'Museo del Pueblo Asturiano';
    titulo5 = 'Casa de Jovellanos';
    titulo6 = 'Escaleras del Rock';

    siguiente = 'Avilés';
    siguienteDonde = '/aviles';
    anterior = 'Oviedo';
    anteriorDonde = '/oviedo';

  constructor() { }

}
