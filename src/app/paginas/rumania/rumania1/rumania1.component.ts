import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rumania1',
  templateUrl: './rumania1.component.html',
  styleUrls: ['./rumania1.component.css']
})
export class Rumania1Component implements OnInit {

  siguiente = 'Llegada a Bucarest, por los pelos';
  siguienteDonde = '/rumania-dia-1';
  anterior = 'Portada del viaje';
  anteriorDonde = '/rumania';

  constructor() { }

  ngOnInit() {
  }

}
