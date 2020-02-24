import { Component } from '@angular/core';

@Component({
  selector: 'app-rumania2',
  templateUrl: './rumania2.component.html',
  styleUrls: ['./rumania2.component.css']
})
export class Rumania2Component {

  siguiente = 'Curtea de Arges, Castillo Vlad Tepes y Transfăgărășan';
  siguienteDonde = '/rumania-dia-2';
  anterior = 'Portada del viaje';
  anteriorDonde = '/rumania-datos-viaje';

  constructor() { }

}
