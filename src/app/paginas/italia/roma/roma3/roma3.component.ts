import { Component } from '@angular/core';

@Component({
  selector: 'app-roma3',
  templateUrl: './roma3.component.html',
  styleUrls: ['./roma3.component.css']
})
export class Roma3Component {

  imagen1 = '../../../assets/imagenes/galeriaRoma/IMG_2286.JPG';
  imagen2 = '../../../assets/imagenes/galeriaRoma/IMG_2293.JPG';
  imagen3 = '../../../assets/imagenes/galeriaRoma/IMG_2302.JPG';
  imagen4 = '../../../assets/imagenes/galeriaRoma/IMG_2774.JPG';
  imagen5 = '../../../assets/imagenes/galeriaRoma/IMG_2776.JPG';
  imagen6 = '../../../assets/imagenes/galeriaRoma/IMG_2308.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaRoma/IMG_2286.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaRoma/IMG_2293.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaRoma/IMG_2302.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaRoma/IMG_2774.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaRoma/IMG_2776.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaRoma/IMG_2308.JPG';
  titulo1 = 'Plaza España';
  titulo2 = 'Obelisco';
  titulo3 = 'Castel Sant´Angelo';
  titulo4 = 'Laooconte, Museos vaticanos';
  titulo5 = 'Escuela de Atenas, Museos vaticanos';
  titulo6 = 'San Pedro del Vaticano';

  siguiente = 'Termas Diocleciano, Sta. Maria Mayor, S.Pietro in Vincoli';
  siguienteDonde = '/roma-dia-4';
  anterior = 'Plaza Spagna, plaza del Popolo, Ciudad del Vaticano, Trastevere';
  anteriorDonde = '/roma-dia-2';

  constructor() { }

}
