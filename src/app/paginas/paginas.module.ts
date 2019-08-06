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

import { BerlinComponent } from './berlin/berlin.component';
import { Berlin1Component } from './berlin/berlin1/berlin1.component';
import { Berlin2Component } from './berlin/berlin2/berlin2.component';
import { Berlin3Component } from './berlin/berlin3/berlin3.component';
import { Berlin4Component } from './berlin/berlin4/berlin4.component';
import { Berlin5Component } from './berlin/berlin5/berlin5.component';
import { SiciliaComponent } from './sicilia/sicilia.component';

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
    ModalFoto6Component
  ],
  exports: [
    CarruselComponent
  ],
  imports: [
    PAGINAS_ROUTES
  ]
})

export class PaginasModule { }
