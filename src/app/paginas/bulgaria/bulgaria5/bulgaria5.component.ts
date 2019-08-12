import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulgaria5',
  templateUrl: './bulgaria5.component.html',
  styleUrls: ['./bulgaria5.component.css']
})
export class Bulgaria5Component implements OnInit {

  siguiente = 'Portada del viaje';
  siguienteDonde = '/rumania-y-bulgaria';
  anterior = 'Monasterio Bachkovo, Fuerte de Assen, Plovdiv y Veliko Tarnovo';
  anteriorDonde = '/bulgaria-dia-2';

  constructor() { }

  ngOnInit() {
  }

}
