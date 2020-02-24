import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto10',
  templateUrl: './modal-foto10.component.html',
  styleUrls: ['./modal-foto10.component.css']
})
export class ModalFoto10Component {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }
}
