import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  @Input() vuelos: string;
  @Input() hoteles: string;
  @Input() comidas: string;
  @Input() entradas: string;
  @Input() transportes: string;
  @Input() suma: string;

  constructor() { }

  ngOnInit() {
  }

}
