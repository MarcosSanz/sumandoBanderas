import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin3',
  templateUrl: './berlin3.component.html',
  styleUrls: ['./berlin3.component.css']
})
export class Berlin3Component implements OnInit {

  siguiente = 'Potsdam y Berlín de noche';
  siguienteDonde = '/berlin-dia-4';
  anterior = 'Treptower Park, East Side Galery, CheckPoint Charlie, Topografia del Terror';
  anteriorDonde = '/berlin-dia-2';

  constructor() { }

  ngOnInit() {
  }

}
