import { Component } from '@angular/core';

@Component({
  selector: 'app-extremadura3',
  templateUrl: './extremadura3.component.html',
  styleUrls: ['./extremadura3.component.css']
})
export class Extremadura3Component {

  siguiente = 'Portada del viaje';
  siguienteDonde = '/extremadura';
  anterior = 'Mérida';
  anteriorDonde = '/extremadura-dia-2';

  constructor() { }
}
