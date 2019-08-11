import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania10',
  templateUrl: './rumania10.component.html',
  styleUrls: ['./rumania10.component.css']
})
export class Rumania10Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/rum-10-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/rum-10-2.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/rum-10-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/rum-10-4.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/rum-10-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/rum-10-6.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/rum-10-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/rum-10-2.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/rum-10-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/rum-10-4.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/rum-10-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/rum-10-6.jpg';
  titulo1 = 'Zona inndustrial de Huendedora';
  titulo2 = 'Castillo de Corvinilor';
  titulo3 = 'Castillo de Corvinilor';
  titulo4 = 'Castillo de Corvinilor';
  titulo5 = 'Castillo de Corvinilor';
  titulo6 = 'Plaza Mayor de Sibiu';

  siguiente = 'Bucureşti';
  siguienteDonde = '/rumania-dia-10';
  anterior = 'Cluj-Napoca, Aiud y Alba Iulia';
  anteriorDonde = '/rumania-dia-8';

  constructor() { }

  ngOnInit() {
  }

}
