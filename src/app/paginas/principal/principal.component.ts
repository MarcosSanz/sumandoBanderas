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

  tituloDia3 = 'Rumanía en 10 días';
  imagenDia3 = '../../../assets/imagenes/galeriaRumania/rum15.jpg';
  enlaceDia3 = '/rumania-y-bulgaria';

  tituloDia4 = 'Bulgaria en 5 días';
  imagenDia4 = '../../../assets/imagenes/galeriaRumania/bul-2-7.jpg';
  enlaceDia4 = '/bulgaria-dia-1';

  tituloDia5 = 'Berlín en 4 días';
  imagenDia5 = '../../../assets/imagenes/galeriaBerlin/42491.jpg';
  enlaceDia5 = '/berlin';

  tituloDia6 = 'Roma en 3 días';
  imagenDia6 = '../../../assets/imagenes/galeriaRoma/86119.jpg';
  enlaceDia6 = '/roma';

  tituloDia7 = 'Sicilia en 11 días';
  imagenDia7 = '../../../assets/imagenes/galeriaSicilia/IMG-0113.jpg';
  enlaceDia7 = '/sicilia';

  tituloDia8 = 'Estocolmo en 5 días';
  imagenDia8 = '../../../assets/imagenes/galeriaEstocolmo/IMG-7153.JPG';
  enlaceDia8 = '/estocolmo';

  constructor() { }

  ngOnInit() {
  }

}
