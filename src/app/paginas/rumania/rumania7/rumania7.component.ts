import { Component } from '@angular/core';

@Component({
  selector: 'app-rumania7',
  templateUrl: './rumania7.component.html',
  styleUrls: ['./rumania7.component.css']
})
export class Rumania7Component {

  imagen1 = '../../../assets/imagenes/galeriaRumania/rum-7-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/rum-7-4.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/rum-7-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/rum-7-6.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/rum-7-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/rum-7-2.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/rum-7-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/rum-7-4.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/rum-7-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/rum-7-6.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/rum-7-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/rum-7-2.jpg';
  titulo1 = 'Iglesia Fortificada de Valea Viilor';
  titulo2 = 'Iglesia Fortificada de Valea Viilor';
  titulo3 = 'Iglesia Fortificada de Biertan';
  titulo4 = 'Iglesia Fortificada de Biertan';
  titulo5 = 'Vistas desde la torre del reloj, Sighișoara';
  titulo6 = 'Cementerio de Sighișoara';

  siguiente = 'Maramureş, Cementerio Alegre y Baia Mare';
  siguienteDonde = '/rumania-dia-7';
  anterior = 'Castillo Peleș, Castillo Pelisor, Sinaia y Sighișoara';
  anteriorDonde = '/rumania-dia-5';

  constructor() { }

}
