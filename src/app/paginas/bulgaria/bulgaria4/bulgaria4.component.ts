import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulgaria4',
  templateUrl: './bulgaria4.component.html',
  styleUrls: ['./bulgaria4.component.css']
})
export class Bulgaria4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/bul-4-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/bul-4-2.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/bul-4-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/bul-4-4.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/bul-4-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/bul-4-6.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/bul-4-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/bul-4-2.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/bul-4-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/bul-4-4.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/bul-4-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/bul-4-6.jpg';
  titulo1 = 'Teatro romano de Plovdiv';
  titulo2 = 'Plovdiv';
  titulo3 = 'Plovdiv';
  titulo4 = 'Samovodska Charshiya, Veliko Tarnovo';
  titulo5 = 'Veliko Tarnovo';
  titulo6 = 'Veliko Tarnovo';

  siguiente = 'Monasterio de la Transfiguración, Nicopolis ad Istrum y Bucarest';
  siguienteDonde = '/bulgaria-dia-5';
  anterior = 'Monasterio de Rila y Sofía';
  anteriorDonde = '/bulgaria-dia-3';

  constructor() { }

  ngOnInit() {
  }

}
