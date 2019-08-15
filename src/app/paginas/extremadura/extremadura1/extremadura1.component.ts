import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extremadura1',
  templateUrl: './extremadura1.component.html',
  styleUrls: ['./extremadura1.component.css']
})
export class Extremadura1Component implements OnInit {

  siguiente = 'Mérida';
  siguienteDonde = '/extremadura-dia-2';
  anterior = 'Portada del viaje';
  anteriorDonde = '/extremadura';

  constructor() { }

  ngOnInit() {
  }

}
