import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  @Input() titulo1: string;
  @Input() titulo2: string;
  @Input() titulo3: string;
  @Input() titulo4: string;
  @Input() titulo5: string;
  @Input() descripcion1: string;
  @Input() descripcion2: string;
  @Input() descripcion3: string;
  @Input() descripcion4: string;
  @Input() descripcion5: string;
  @Input() imagen1: string;
  @Input() imagen2: string;
  @Input() imagen3: string;
  @Input() imagen4: string;
  @Input() imagen5: string;

  constructor() { }

}
