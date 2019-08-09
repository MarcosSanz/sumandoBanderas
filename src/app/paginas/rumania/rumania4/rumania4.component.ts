import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania4',
  templateUrl: './rumania4.component.html',
  styleUrls: ['./rumania4.component.css']
})
export class Rumania4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/rum5.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/rum6.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/rum9.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/rum8.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/rum10.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/rum11.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/rum5.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/rum6.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/rum9.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/rum8.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/rum10.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/rum11.jpg';
  titulo1 = 'Monasterio de Curtea de Arges';
  titulo2 = 'Monasterio de Curtea de Arges';
  titulo3 = 'Interior Monasterio de Curtea de Arges';
  titulo4 = 'Subida al Castillo de Vald Tepes';
  titulo5 = 'Subida al Castillo de Vald Tepes';
  titulo6 = 'KSubida al Castillo de Vald Tepes';

  siguiente = 'Transfăgărășan, Făgăraș y Brasov';
  siguienteDonde = '/rumania-dia-4';
  anterior = 'Curtea de Arges, Castillo Vlad Tepes y Transfăgărășan';
  anteriorDonde = '/rumania-dia-2';
  constructor() { }

  ngOnInit() {
  }

}
