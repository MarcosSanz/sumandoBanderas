import { NgModule } from '@angular/core';
import { PAGINAS_ROUTES } from './paginas.routes';

import { PaginasComponent } from './paginas.component';
import { PaginaSiguienteComponent } from '../componentes/pagina-siguiente/pagina-siguiente.component';
import { PaginaAnteriorComponent } from '../componentes/pagina-anterior/pagina-anterior.component';
import { CarruselComponent } from '../componentes/carrusel/carrusel.component';
import { ModalFotoComponent } from '../componentes/modal-foto/modal-foto/modal-foto.component';
import { ModalFoto2Component } from '../componentes/modal-foto/modal-foto2/modal-foto2.component';
import { ModalFoto3Component } from '../componentes/modal-foto/modal-foto3/modal-foto3.component';
import { ModalFoto4Component } from '../componentes/modal-foto/modal-foto4/modal-foto4.component';
import { ModalFoto5Component } from '../componentes/modal-foto/modal-foto5/modal-foto5.component';
import { ModalFoto6Component } from '../componentes/modal-foto/modal-foto6/modal-foto6.component';
import { CardsComponent } from '../componentes/cards/cards.component';

import { BerlinComponent } from './alemania/berlin/berlin.component';
import { Berlin1Component } from './alemania/berlin/berlin1/berlin1.component';
import { Berlin2Component } from './alemania/berlin/berlin2/berlin2.component';
import { Berlin3Component } from './alemania/berlin/berlin3/berlin3.component';
import { Berlin4Component } from './alemania/berlin/berlin4/berlin4.component';
import { Berlin5Component } from './alemania/berlin/berlin5/berlin5.component';
import { SiciliaComponent } from './italia/sicilia/sicilia.component';
import { NuevaYorkComponent } from './eeuu/nueva-york/nueva-york.component';
import { Ny1Component } from './eeuu/nueva-york/ny1/ny1.component';
import { Ny2Component } from './eeuu/nueva-york/ny2/ny2.component';
import { Ny3Component } from './eeuu/nueva-york/ny3/ny3.component';
import { Ny4Component } from './eeuu/nueva-york/ny4/ny4.component';
import { Ny5Component } from './eeuu/nueva-york/ny5/ny5.component';
import { Washington1Component } from './eeuu/washington/washington1/washington1.component';
import { Washington2Component } from './eeuu/washington/washington2/washington2.component';

@NgModule({
  declarations: [
    PaginasComponent,
    PaginaSiguienteComponent,
    PaginaAnteriorComponent,
    BerlinComponent,
    Berlin1Component,
    Berlin2Component,
    Berlin3Component,
    Berlin4Component,
    Berlin5Component,
    SiciliaComponent,
    CarruselComponent,
    ModalFotoComponent,
    ModalFoto2Component,
    ModalFoto3Component,
    ModalFoto4Component,
    ModalFoto5Component,
    ModalFoto6Component,
    CardsComponent,
    NuevaYorkComponent,
    Ny1Component,
    Ny2Component,
    Ny3Component,
    Ny4Component,
    Ny5Component,
    Washington1Component,
    Washington2Component
  ],
  exports: [
    CarruselComponent
  ],
  imports: [
    PAGINAS_ROUTES
  ]
})

export class PaginasModule { }
