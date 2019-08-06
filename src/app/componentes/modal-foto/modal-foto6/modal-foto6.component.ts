import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto6',
  templateUrl: './modal-foto6.component.html',
  styleUrls: ['./modal-foto6.component.css']
})
export class ModalFoto6Component implements OnInit {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

  ngOnInit() {
  }

}
