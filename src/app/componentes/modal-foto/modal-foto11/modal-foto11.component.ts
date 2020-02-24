import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto11',
  templateUrl: './modal-foto11.component.html',
  styleUrls: ['./modal-foto11.component.css']
})
export class ModalFoto11Component {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

}
