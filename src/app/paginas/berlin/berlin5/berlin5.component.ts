import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berlin5',
  templateUrl: './berlin5.component.html',
  styleUrls: ['./berlin5.component.css']
})
export class Berlin5Component implements OnInit {

  anterior = 'Potsdam y Berlín de noche';
  anteriorDonde = '/berlin-dia-4';

  constructor() { }

  ngOnInit() {
  }

}
