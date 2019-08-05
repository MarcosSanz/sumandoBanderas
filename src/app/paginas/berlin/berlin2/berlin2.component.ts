import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin2',
  templateUrl: './berlin2.component.html',
  styleUrls: ['./berlin2.component.css']
})
export class Berlin2Component implements OnInit {

  imagen1 = '../../../assets/imagenes/galeriaBerlin/IMG_2096.JPG';
  imagen2 = '../../../assets/imagenes/galeriaBerlin/IMG_2025.JPG';

  constructor() { }

  ngOnInit() {
  }

}
