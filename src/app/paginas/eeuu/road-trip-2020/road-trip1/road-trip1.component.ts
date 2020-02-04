import { Component } from '@angular/core';

@Component({
    selector: 'app-road-trip1',
    templateUrl: './road-trip1.component.html',
    styleUrls: ['./road-trip1.component.css']
})
export class RoadTrip1Component {

    siguiente = 'Salem y Bostón';
    siguienteDonde = '/roadtrip-eeuu-dia-2';
    anterior = 'Datos del viaje';
    anteriorDonde = '/roadtrip-eeuu-datos-viaje';

    constructor() { }

}
