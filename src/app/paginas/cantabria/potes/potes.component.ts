import { Component } from '@angular/core';

@Component({
  selector: 'app-potes',
  templateUrl: './potes.component.html',
  styleUrls: ['./potes.component.css']
})
export class PotesComponent {

    imagen1 = '../../../assets/imagenes/galeriaCantabria/potes3.jpg';
    imagen2 = '../../../assets/imagenes/galeriaCantabria/potes4.jpg';
    imagen3 = '../../../assets/imagenes/galeriaCantabria/potes7.jpg';
    imagen4 = '../../../assets/imagenes/galeriaCantabria/potes8.jpg';
    imagen5 = '../../../assets/imagenes/galeriaCantabria/potes10.jpg';
    imagen6 = '../../../assets/imagenes/galeriaCantabria/potes5.jpg';
    imagenModal1 = '../../../assets/imagenes/galeriaCantabria/potes3.jpg';
    imagenModal2 = '../../../assets/imagenes/galeriaCantabria/potes4.jpg';
    imagenModal3 = '../../../assets/imagenes/galeriaCantabria/potes7.jpg';
    imagenModal4 = '../../../assets/imagenes/galeriaCantabria/potes8.jpg';
    imagenModal5 = '../../../assets/imagenes/galeriaCantabria/potes10.jpg';
    imagenModal6 = '../../../assets/imagenes/galeriaCantabria/potes5.jpg';
    titulo1 = 'Vistas desde la Ermita de San Miguel';
    titulo2 = 'Monasterio de Santo Toribio';
    titulo3 = 'Potes';
    titulo4 = 'Románico en la ruta del Liébana';
    titulo5 = 'Ermita de San Miguel';
    titulo6 = 'Modrovejo';

    siguiente = 'Comillas, Santillana del Mar y Altamira';
    siguienteDonde = '/santillana';
    anterior = 'Santander';
    anteriorDonde = '/santander';

  constructor() { }

}
