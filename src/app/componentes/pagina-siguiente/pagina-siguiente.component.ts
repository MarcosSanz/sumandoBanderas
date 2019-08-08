import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagina-siguiente',
  templateUrl: './pagina-siguiente.component.html',
  styleUrls: ['./pagina-siguiente.component.css']
})
export class PaginaSiguienteComponent implements OnInit {

  @Input() siguiente: string;
  @Input() siguienteDonde: string;
  @Input() anterior: string;
  @Input() anteriorDonde: string;
  validarSiguiente: boolean;

  constructor() { }

  ngOnInit() {
    this.validarSiguiente = true;
  }

}
