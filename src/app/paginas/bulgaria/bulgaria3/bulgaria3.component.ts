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
  titulo1 = 'Catedral de Sveta-Nedelya';
  titulo2 = 'Mezquita Banya Bashi';
  titulo3 = 'Iglesia de Sveta Petka Samardzhiiska';
  titulo4 = 'Iglesia de Hagia Sofía';
  titulo5 = 'Regional History Museum';
  titulo6 = 'Catedral San Aleksandar Nevski';

  siguiente = 'Monasterio de Rila y Sofía';
  siguienteDonde = '/bulgaria-dia-4';
  anterior = 'Sofía';
  anteriorDonde = '/bulgaria-dia-2';

  constructor() { }

  ngOnInit() {
  }

}
