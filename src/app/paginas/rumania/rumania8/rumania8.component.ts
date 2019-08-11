import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania8',
  templateUrl: './rumania8.component.html',
  styleUrls: ['./rumania8.component.css']
})
export class Rumania8Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/rum-8-3.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/rum-8-4.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/rum-8-5.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/rum-8-6.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/rum-8-7.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/rum-8-8.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/rum-8-3.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/rum-8-4.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/rum-8-5.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/rum-8-6.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/rum-8-7.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/rum-8-8.jpg';
  titulo1 = 'Iglesia de maderas de los Maramureş';
  titulo2 = 'Iglesia de maderas de los Maramureş';
  titulo3 = 'Cementerio Alegre de Sapantza';
  titulo4 = 'Iglesia de maderas de los Maramureş';
  titulo5 = 'Baia Mare';
  titulo6 = 'Baia Mare';

  siguiente = 'Cluj-Napoca, Aiud y Alba Iulia';
  siguienteDonde = '/rumania-dia-8';
  anterior = 'Iglesia Fortificada de Valea Viilor, Mediaş, Iglesia Fortificada de Biertan y Sighişoara';
  anteriorDonde = '/rumania-dia-6';

  constructor() { }

  ngOnInit() {
  }

}
