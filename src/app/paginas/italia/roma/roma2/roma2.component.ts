import { Component } from '@angular/core';

@Component({
  selector: 'app-roma2',
  templateUrl: './roma2.component.html',
  styleUrls: ['./roma2.component.css']
})
export class Roma2Component {

  imagen1 = '../../../assets/imagenes/galeriaRoma/IMG_2140.JPG';
  imagen2 = '../../../assets/imagenes/galeriaRoma/IMG_2143.JPG';
  imagen3 = '../../../assets/imagenes/galeriaRoma/IMG_2191.JPG';
  imagen4 = '../../../assets/imagenes/galeriaRoma/IMG_2177.JPG';
  imagen5 = '../../../assets/imagenes/galeriaRoma/IMG_2186.JPG';
  imagen6 = '../../../assets/imagenes/galeriaRoma/IMG_2197.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaRoma/IMG_2140.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaRoma/IMG_2143.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaRoma/IMG_2191.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaRoma/IMG_2177.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaRoma/IMG_2186.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaRoma/IMG_2197.JPG';
  titulo1 = 'Foro Romano';
  titulo2 = 'Panteón';
  titulo3 = 'Rio Tiber y San Pedro';
  titulo4 = 'Coliseo';
  titulo5 = 'Fontana dei Trevi';
  titulo6 = 'Altare della Patria';

  siguiente = 'Plaza Spagna, plaza del Popolo, Ciudad del Vaticano, Trastevere';
  siguienteDonde = '/roma-dia-3';
  anterior = 'Preparativos y llegada';
  anteriorDonde = '/roma-dia-1';

  constructor() { }
}
