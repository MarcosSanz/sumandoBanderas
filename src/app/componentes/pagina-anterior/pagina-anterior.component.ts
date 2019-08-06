import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagina-anterior',
  templateUrl: './pagina-anterior.component.html',
  styleUrls: ['./pagina-anterior.component.css']
})
export class PaginaAnteriorComponent implements OnInit {

  @Input() anterior: string;
  @Input() anteriorDonde: string;

  constructor() { }

  ngOnInit() {
  }

}
