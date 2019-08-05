import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() titulo1: string;
  @Input() titulo2: string;
  @Input() titulo3: string;
  @Input() imagen1: string;
  @Input() imagen2: string;
  @Input() imagen3: string;

  constructor() { }

  ngOnInit() {
  }

}
