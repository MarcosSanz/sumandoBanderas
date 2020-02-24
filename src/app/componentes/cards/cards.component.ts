import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() tituloCard: string;
  @Input() contenidoCard: string;
  @Input() imagenCard: string;
  @Input() enlaceCard: string;

  constructor() { }

}
