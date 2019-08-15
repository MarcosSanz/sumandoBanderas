import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mazarron',
  templateUrl: './mazarron.component.html',
  styleUrls: ['./mazarron.component.css']
})
export class MazarronComponent implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaMazarron/IMG_2545.JPG';
  imagen2 = '../../../assets/imagenes/galeriaMazarron/IMG_2583.JPG';
  imagen3 = '../../../assets/imagenes/galeriaMazarron/IMG_3350.JPG';
  imagen4 = '../../../assets/imagenes/galeriaMazarron/IMG_2558.JPG';
  imagen5 = '../../../assets/imagenes/galeriaMazarron/IMG_2573.JPG';
  imagen6 = '../../../assets/imagenes/galeriaMazarron/IMG_2556.JPG';
  imagenModal1 = '../../../assets/imagenes/galeriaMazarron/IMG_2545.JPG';
  imagenModal2 = '../../../assets/imagenes/galeriaMazarron/IMG_2583.JPG';
  imagenModal3 = '../../../assets/imagenes/galeriaMazarron/IMG_3350.JPG';
  imagenModal4 = '../../../assets/imagenes/galeriaMazarron/IMG_2558.JPG';
  imagenModal5 = '../../../assets/imagenes/galeriaMazarron/IMG_2573.JPG';
  imagenModal6 = '../../../assets/imagenes/galeriaMazarron/IMG_2556.JPG';
  titulo1 = 'Playa de Bahía';
  titulo2 = 'Parque arqueológico Cabezo de Plomo';
  titulo3 = 'Fuerte de Castillitos';
  titulo4 = 'Teatro Romano de Cartagena';
  titulo5 = 'Puerto de Cartagena';
  titulo6 = 'Ayuntamiento Cartagena';

  constructor() { }

  ngOnInit() {
  }

}
