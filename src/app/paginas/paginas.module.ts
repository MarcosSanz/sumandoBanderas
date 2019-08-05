import { NgModule } from '@angular/core';
import { PAGINAS_ROUTES } from './paginas.routes';

import { PaginasComponent } from './paginas.component';

import { BerlinComponent } from './berlin/berlin.component';
import { Berlin1Component } from './berlin/berlin1/berlin1.component';
import { Berlin2Component } from './berlin/berlin2/berlin2.component';
import { Berlin3Component } from './berlin/berlin3/berlin3.component';
import { Berlin4Component } from './berlin/berlin4/berlin4.component';
import { Berlin5Component } from './berlin/berlin5/berlin5.component';
import { SiciliaComponent } from './sicilia/sicilia.component';
import { CarruselComponent } from '../componentes/carrusel/carrusel.component';
import { ModalFotoComponent } from '../componentes/modal-foto/modal-foto.component';

@NgModule({
  declarations: [
    PaginasComponent,
    BerlinComponent,
    Berlin1Component,
    Berlin2Component,
    Berlin3Component,
    Berlin4Component,
    Berlin5Component,
    SiciliaComponent,
    CarruselComponent,
    ModalFotoComponent
  ],
  exports: [
    CarruselComponent,
    ModalFotoComponent
  ],
  imports: [
    PAGINAS_ROUTES
  ]
})

export class PaginasModule { }
