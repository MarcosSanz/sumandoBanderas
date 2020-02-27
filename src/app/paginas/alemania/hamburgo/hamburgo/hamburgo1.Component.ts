import { Component } from '@angular/core';
@Component({
    selector: 'app-hamburgo1',
    templateUrl: './hamburgo1.component.html',
    styleUrls: ['./hamburgo1.component.css']
})
export class Hamburgo1Component {

    siguiente = 'Stade y Neuengamme';
    siguienteDonde = '/stade-y-neuengamme';
    anterior = 'Norte Alemania en 3 días';
    anteriorDonde = '/norte-alemania-3días';

    constructor() { }
}
