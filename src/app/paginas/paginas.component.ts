import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

}
