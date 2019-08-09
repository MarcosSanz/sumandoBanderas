import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto12',
  templateUrl: './modal-foto12.component.html',
  styleUrls: ['./modal-foto12.component.css']
})
export class ModalFoto12Component implements OnInit {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

  ngOnInit() {
  }

}
