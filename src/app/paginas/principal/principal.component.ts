import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  // Tarjetas de cada dia
  tituloDia1 = 'Nueva York en 5 días';
  imagenDia1 = '../../../assets/imagenes/galeriaNy/foto1.png';
  enlaceDia1 = '/nueva-york';

  tituloDia2 = 'Washington en 2 días';
  imagenDia2 = '../../../assets/imagenes/galeriaNy/IMG_5859.JPG';
  enlaceDia2 = '/was1';

  tituloDia3 = 'Rumania en 10 días';
  imagenDia3 = '../../../assets/imagenes/galeriaRumania/rum15.jpg';
  enlaceDia3 = '/rumania-y-bulgaria';

  tituloDia4 = 'Bulgaria en 5 días';
  imagenDia4 = '../../../assets/imagenes/galeriaRumania/bul-2-7.jpg';
  enlaceDia4 = '/bulgaria-dia-1';

  constructor() { }

  ngOnInit() {
  }

}
