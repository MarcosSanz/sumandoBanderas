import { Component } from '@angular/core';

@Component({
  selector: 'app-roma4',
  templateUrl: './roma4.component.html',
  styleUrls: ['./roma4.component.css']
})
export class Roma4Component {

  imagen1 = '../../../assets/imagenes/galeriaRoma/IMG_2255.JPG';
  imagen2 = '../../../assets/imagenes/galeriaRoma/IMG_2801.JPG';
  imagen3 = '../../../assets/imagenes/galeriaRoma/IMG_2810.JPG';
  imagen4 = '../../../assets/imagenes/galeriaRoma/IMG_2266.JPG';
  imagen5 = '../../../assets/imagenes/galeriaRoma/IMG_2243.JPG';
  imagen6 = '../../../assets/imagenes/galeriaRoma/IMG_2767.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaRoma/IMG_2255.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaRoma/IMG_2801.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaRoma/IMG_2810.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaRoma/IMG_2266.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaRoma/IMG_2243.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaRoma/IMG_2767.JPG';
  titulo1 = 'Il pugilato';
  titulo2 = 'San Pietro in Vincoli';
  titulo3 = 'El Moises, Miguel Angel';
  titulo4 = 'Julio Cesar';
  titulo5 = 'Termas Diocleciano';

  siguiente = 'Portada del viaje';
  siguienteDonde = '/roma';
  anterior = 'Panteón, Coliseo, Foro, Palatino, Fontana di Trevi y Altare della Patria';
  anteriorDonde = '/roma-dia-3';

  constructor() { }
}
