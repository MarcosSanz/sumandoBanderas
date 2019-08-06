import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin4',
  templateUrl: './berlin4.component.html',
  styleUrls: ['./berlin4.component.css']
})
export class Berlin4Component implements OnInit {

  siguiente = 'Campo de concentración, Sachsenhausen';
  siguienteDonde = '/berlin-dia-5';
  anterior = 'Centro de Berlín, isla de los museos, barrio judío';
  anteriorDonde = '/berlin-dia-3';

  constructor() { }

  ngOnInit() {
  }

}
