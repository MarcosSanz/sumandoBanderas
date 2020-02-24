import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto9',
  templateUrl: './modal-foto9.component.html',
  styleUrls: ['./modal-foto9.component.css']
})
export class ModalFoto9Component {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }
}
