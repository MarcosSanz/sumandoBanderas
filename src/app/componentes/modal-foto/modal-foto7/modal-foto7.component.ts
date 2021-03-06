import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto7',
  templateUrl: './modal-foto7.component.html',
  styleUrls: ['./modal-foto7.component.css']
})
export class ModalFoto7Component implements OnInit {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

  ngOnInit() {
  }

}
