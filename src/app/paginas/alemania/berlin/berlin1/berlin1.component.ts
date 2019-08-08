import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin1',
  templateUrl: './berlin1.component.html',
  styleUrls: ['./berlin1.component.css']
})
export class Berlin1Component implements OnInit {

  siguiente = 'Treptower Park, East Side Galery, CheckPoint Charlie, Topografia del Terror';
  siguienteDonde = '/berlin-dia-2';
  anterior = 'Portada del viaje';
  anteriorDonde = '/berlin';

  constructor() { }

  ngOnInit() {
  }

}
