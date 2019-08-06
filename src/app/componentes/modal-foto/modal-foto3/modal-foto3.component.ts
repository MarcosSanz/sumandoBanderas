import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto3',
  templateUrl: './modal-foto3.component.html',
  styleUrls: ['./modal-foto3.component.css']
})
export class ModalFoto3Component implements OnInit {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

  ngOnInit() {
  }

}
