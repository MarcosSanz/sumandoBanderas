import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania11',
  templateUrl: './rumania11.component.html',
  styleUrls: ['./rumania11.component.css']
})
export class Rumania11Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/rum-11-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/rum-11-2.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/rum-11-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/rum-11-4.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/rum-11-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/rum-11-6.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/rum-11-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/rum-11-2.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/rum-11-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/rum-11-4.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/rum-11-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/rum-11-6.jpg';
  titulo1 = '';
  titulo2 = '';
  titulo3 = '';
  titulo4 = '';
  titulo5 = '';
  titulo6 = '';

  siguiente = 'Bulgaria';
  siguienteDonde = '/bulgaria-dia-1';
  anterior = 'Bucureşti';
  anteriorDonde = '/rumania-dia-9';

  constructor() { }

  ngOnInit() {
  }

}
