import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto2',
  templateUrl: './modal-foto2.component.html',
  styleUrls: ['./modal-foto2.component.css']
})
export class ModalFoto2Component implements OnInit {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

  ngOnInit() {
  }

}
