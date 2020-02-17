import { Component } from '@angular/core';

@Component({
  selector: 'app-road-trip10',
  templateUrl: './road-trip10.component.html',
  styleUrls: ['./road-trip10.component.css']
})
export class RoadTrip10Component {

    imagen1 = '../../../assets/imagenes/galeriaEEUU/dia9-4.jpeg';
    imagen2 = '../../../assets/imagenes/galeriaEEUU/dia9-16.jpeg';
    imagen3 = '../../../assets/imagenes/galeriaEEUU/dia9-6.jpeg';
    imagen4 = '../../../assets/imagenes/galeriaEEUU/dia9-7.jpeg';
    imagen5 = '../../../assets/imagenes/galeriaEEUU/dia9-8.jpeg';
    imagen6 = '../../../assets/imagenes/galeriaEEUU/dia9-9.jpeg';
    imagenModal1 = '../../../assets/imagenes/galeriaEEUU/dia9-4.jpeg';
    imagenModal2 = '../../../assets/imagenes/galeriaEEUU/dia9-16.jpeg';
    imagenModal3 = '../../../assets/imagenes/galeriaEEUU/dia9-6.jpeg';
    imagenModal4 = '../../../assets/imagenes/galeriaEEUU/dia9-7.jpeg';
    imagenModal5 = '../../../assets/imagenes/galeriaEEUU/dia9-8.jpeg';
    imagenModal6 = '../../../assets/imagenes/galeriaEEUU/dia9-9.jpeg';
    titulo1 = 'Washington';
    titulo2 = 'Jefferson Memorial';
    titulo3 = 'White House';
    titulo4 = 'Lincoln Memorial';
    titulo5 = 'Abraham Lincoln';
    titulo6 = 'Monasterio de dia9';

    siguiente = 'Portada del viaje';
    siguienteDonde = '/roadtrip-eeuu';
    anterior = 'Wall Street, Museo Hª Natural y Central Park';
    anteriorDonde = '/roadtrip-eeuu-dia-9';

  constructor() { }

}
