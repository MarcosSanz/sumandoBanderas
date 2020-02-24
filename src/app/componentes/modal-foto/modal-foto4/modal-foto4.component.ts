import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto4',
  templateUrl: './modal-foto4.component.html',
  styleUrls: ['./modal-foto4.component.css']
})
export class ModalFoto4Component {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

}
