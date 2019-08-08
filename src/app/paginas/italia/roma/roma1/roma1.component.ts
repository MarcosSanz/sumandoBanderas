import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roma1',
  templateUrl: './roma1.component.html',
  styleUrls: ['./roma1.component.css']
})
export class Roma1Component implements OnInit {

  siguiente = 'Panteón, Coliseo, Foro, Palatino, Fontana di Trevi y Altare della Patria';
  siguienteDonde = '/roma-dia-2';
  anterior = 'Portada del viaje';
  anteriorDonde = '/roma';

  constructor() { }

  ngOnInit() {
  }

}
