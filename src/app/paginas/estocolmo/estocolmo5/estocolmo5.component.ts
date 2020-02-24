import { Component } from '@angular/core';

@Component({
    selector: 'app-estocolmo5',
    templateUrl: './estocolmo5.component.html',
    styleUrls: ['./estocolmo5.component.css']
})
export class Estocolmo5Component {

    siguiente = 'Portada del viaje';
    siguienteDonde = '/estocolmo';
    anterior = 'Palacio de Drottningholm, Palacio Real y Gamla Stan';
    anteriorDonde = '/estocolmo-dia-4';

    constructor() { }

}
