import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto',
  templateUrl: './modal-foto.component.html',
  styleUrls: ['./modal-foto.component.css']
})
export class ModalFotoComponent {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

}
