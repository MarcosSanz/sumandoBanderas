import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extremadura2',
  templateUrl: './extremadura2.component.html',
  styleUrls: ['./extremadura2.component.css']
})
export class Extremadura2Component implements OnInit {

  siguiente = 'Cáceres';
  siguienteDonde = '/extremadura-dia-3';
  anterior = 'Trujillo';
  anteriorDonde = '/extremadura-dia-1';

  constructor() { }

  ngOnInit() {
  }

}
