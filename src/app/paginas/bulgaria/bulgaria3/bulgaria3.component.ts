import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulgaria3',
  templateUrl: './bulgaria3.component.html',
  styleUrls: ['./bulgaria3.component.css']
})
export class Bulgaria3Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/bul-3-1.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/bul-3-2.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/bul-3-3.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/bul-3-4.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/bul-3-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/bul-3-6.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/bul-3-1.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/bul-3-2.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/bul-3-3.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/bul-3-4.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/bul-3-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/bul-3-6.jpg';
  titulo1 = 'Entrada Monasterio de Rila';
  titulo2 = 'Monasterio de Rila';
  titulo3 = 'Monasterio de Rila';
  titulo4 = 'Monasterio de Rila';
  titulo5 = 'Otoño en el Monasterio de Rila';
  titulo6 = 'Monasterio de Rila';

  siguiente = 'Monasterio Bachkovo, Fuerte de Assen, Plovdiv y Veliko Tarnovo';
  siguienteDonde = '/bulgaria-dia-4';
  anterior = 'Sofía';
  anteriorDonde = '/bulgaria-dia-2';

  constructor() { }

  ngOnInit() {
  }

}
