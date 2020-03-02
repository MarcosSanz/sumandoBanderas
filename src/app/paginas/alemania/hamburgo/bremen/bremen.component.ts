import { Component } from '@angular/core';

@Component({
    selector: 'app-bremen',
    templateUrl: './bremen.component.html',
    styleUrls: ['./bremen.component.css']
})
export class BremenComponent {

    siguiente = 'Norte Alemania en 3 días';
    siguienteDonde = '/norte-alemania-3días';
    anterior = 'Stade y Neuengamme';
    anteriorDonde = '/stade-y-neuengamme';

    constructor() { }

}
