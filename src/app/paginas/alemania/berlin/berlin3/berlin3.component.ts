import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin3',
  templateUrl: './berlin3.component.html',
  styleUrls: ['./berlin3.component.css']
})
export class Berlin3Component implements OnInit {

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
  titulo2 = 'Vistas de Berlin desde la Catedral';
  titulo3 = 'Zona alternativa';
  titulo4 = 'Monumento a Marx y Engels';
  titulo5 = 'Catedral de Berlin';
  titulo6 = 'KulturBrauerei';

  siguiente = 'Potsdam y Berlín de noche';
  siguienteDonde = '/berlin-dia-4';
  anterior = 'Treptower Park, East Side Galery, CheckPoint Charlie, Topografia del Terror';
  anteriorDonde = '/berlin-dia-2';

  constructor() { }

  ngOnInit() {
  }

}
