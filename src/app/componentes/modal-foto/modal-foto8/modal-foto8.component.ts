import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-foto8',
  templateUrl: './modal-foto8.component.html',
  styleUrls: ['./modal-foto8.component.css']
})
export class ModalFoto8Component implements OnInit {

  @Input() imagen: string;
  @Input() titulo: string;
  @Input() imagenModal: string;

  constructor() { }

  ngOnInit() {
  }

}
