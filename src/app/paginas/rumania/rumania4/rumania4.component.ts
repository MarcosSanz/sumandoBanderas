import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania4',
  templateUrl: './rumania4.component.html',
  styleUrls: ['./rumania4.component.css']
})
export class Rumania4Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaRumania/rum-4-10.jpg';
  imagen2 = '../../../assets/imagenes/galeriaRumania/rum-4-7.jpg';
  imagen3 = '../../../assets/imagenes/galeriaRumania/rum-4-8.jpg';
  imagen4 = '../../../assets/imagenes/galeriaRumania/rum-4-9.jpg';
  imagen5 = '../../../assets/imagenes/galeriaRumania/rum-4-5.jpg';
  imagen6 = '../../../assets/imagenes/galeriaRumania/rum-4-1.jpg';
  imagenModal1 = '../../../assets/imagenes/galeriaRumania/rum-4-10.jpg';
  imagenModal2 = '../../../assets/imagenes/galeriaRumania/rum-4-7.jpg';
  imagenModal3 = '../../../assets/imagenes/galeriaRumania/rum-4-8.jpg';
  imagenModal4 = '../../../assets/imagenes/galeriaRumania/rum-4-9.jpg';
  imagenModal5 = '../../../assets/imagenes/galeriaRumania/rum-4-5.jpg';
  imagenModal6 = '../../../assets/imagenes/galeriaRumania/rum-4-1.jpg';
  titulo1 = 'Cascada Caprâ';
  titulo2 = 'Lago Valea';
  titulo3 = 'Transfăgărășan';
  // titulo4 = 'Subida al Castillo de Vald Tepes';
  // titulo5 = 'Subida al Castillo de Vald Tepes';
  titulo6 = 'Plaza Braşov';

  siguiente = 'Transfăgărășan, Făgăraș y Braşov';
  siguienteDonde = '/rumania-dia-4';
  anterior = 'Curtea de Arges, Castillo Vlad Tepes y Transfăgărășan';
  anteriorDonde = '/rumania-dia-2';
  constructor() { }

  ngOnInit() {
  }

}
