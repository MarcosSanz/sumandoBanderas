import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicilia5',
  templateUrl: './sicilia5.component.html',
  styleUrls: ['./sicilia5.component.css']
})
export class Sicilia5Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaSicilia/IMG-0344.jpg';
  imagen2 = '../../../assets/imagenes/galeriaSicilia/IMG-0252.jpg';
  imagen3 = '../../../assets/imagenes/galeriaSicilia/IMG-0165.jpg';
  imagen4 = '../../../assets/imagenes/galeriaSicilia/IMG-0094.jpg';
  imagen5 = '../../../assets/imagenes/galeriaSicilia/IMG-0367.jpg';
  imagen6 = '../../../assets/imagenes/galeriaSicilia/IMG-0356.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaSicilia/IMG-0344.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaSicilia/IMG-0252.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaSicilia/IMG-0165.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaSicilia/IMG-0094.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaSicilia/IMG-0367.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaSicilia/IMG-0356.jpg';
  titulo1 = 'Valle de los Reyes, Agrigento';
  titulo2 = 'Valle de los Reyes, Agrigento';
  titulo3 = 'Valle de los Reyes, Agrigento';
  titulo4 = 'Piazza Armerina';
  titulo5 = 'Catedral de San Nicoló, Noto';
  titulo6 = 'Palacio Ducezio';

  siguiente = 'Siracusa';
  siguienteDonde = '/sicilia';
  anterior = 'Selinunte, Scala dei Turchi, Agrigento';
  anteriorDonde = '/sicilia-dia-4';

  constructor() { }

  ngOnInit() {
  }

}
