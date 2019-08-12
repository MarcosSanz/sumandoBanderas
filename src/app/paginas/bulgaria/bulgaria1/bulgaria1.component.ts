import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulgaria',
  templateUrl: './bulgaria1.component.html',
  styleUrls: ['./bulgaria1.component.css']
})
export class Bulgaria1Component implements OnInit {

  siguiente = 'Sofía';
  siguienteDonde = '/bulgaria-dia-2';
  anterior = 'Bucureşti';
  anteriorDonde = '/rumania-dia-10';

  constructor() { }

  ngOnInit() {
  }

}
