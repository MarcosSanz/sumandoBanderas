import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto5',
  templateUrl: './modal-foto5.component.html',
  styleUrls: ['./modal-foto5.component.css']
})
export class ModalFoto5Component {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

}
