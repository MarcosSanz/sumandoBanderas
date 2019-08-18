import { NgModule } from '@angular/core';
import { PAGINAS_ROUTES } from './paginas.routes';

import { PaginasComponent } from './paginas.component';
import { PaginaSiguienteComponent } from '../componentes/pagina-siguiente/pagina-siguiente.component';
import { CarruselComponent } from '../componentes/carrusel/carrusel.component';
import { ModalFotoComponent } from '../componentes/modal-foto/modal-foto/modal-foto.component';
import { ModalFoto2Component } from '../componentes/modal-foto/modal-foto2/modal-foto2.component';
import { ModalFoto3Component } from '../componentes/modal-foto/modal-foto3/modal-foto3.component';
import { ModalFoto4Component } from '../componentes/modal-foto/modal-foto4/modal-foto4.component';
import { ModalFoto5Component } from '../componentes/modal-foto/modal-foto5/modal-foto5.component';
import { ModalFoto6Component } from '../componentes/modal-foto/modal-foto6/modal-foto6.component';
import { ModalFoto7Component } from '../componentes/modal-foto/modal-foto7/modal-foto7.component';
import { ModalFoto8Component } from '../componentes/modal-foto/modal-foto8/modal-foto8.component';
import { ModalFoto9Component } from '../componentes/modal-foto/modal-foto9/modal-foto9.component';
import { ModalFoto10Component } from '../componentes/modal-foto/modal-foto10/modal-foto10.component';
import { ModalFoto11Component } from '../componentes/modal-foto/modal-foto11/modal-foto11.component';
import { ModalFoto12Component } from '../componentes/modal-foto/modal-foto12/modal-foto12.component';
import { CardsComponent } from '../componentes/cards/cards.component';
import { GastosComponent } from '../componentes/gastos/gastos.component';

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
import { RomaComponent } from './italia/roma/roma.component';
import { Roma1Component } from './italia/roma/roma1/roma1.component';
import { Roma2Component } from './italia/roma/roma2/roma2.component';
import { Roma3Component } from './italia/roma/roma3/roma3.component';
import { Roma4Component } from './italia/roma/roma4/roma4.component';
import { RumaniaComponent } from './rumania/rumania.component';
import { Rumania1Component } from './rumania/rumania1/rumania1.component';
import { Rumania2Component } from './rumania/rumania2/rumania2.component';
import { Rumania3Component } from './rumania/rumania3/rumania3.component';
import { Rumania4Component } from './rumania/rumania4/rumania4.component';
import { Rumania5Component } from './rumania/rumania5/rumania5.component';
import { Rumania6Component } from './rumania/rumania6/rumania6.component';
import { Rumania7Component } from './rumania/rumania7/rumania7.component';
import { Rumania8Component } from './rumania/rumania8/rumania8.component';
import { Rumania9Component } from './rumania/rumania9/rumania9.component';
import { Rumania10Component } from './rumania/rumania10/rumania10.component';
import { Rumania11Component } from './rumania/rumania11/rumania11.component';
import { Bulgaria1Component } from './bulgaria/bulgaria1/bulgaria1.component';
import { Bulgaria2Component } from './bulgaria/bulgaria2/bulgaria2.component';
import { Bulgaria3Component } from './bulgaria/bulgaria3/bulgaria3.component';
import { Bulgaria4Component } from './bulgaria/bulgaria4/bulgaria4.component';
import { Bulgaria5Component } from './bulgaria/bulgaria5/bulgaria5.component';
import { ExtremaduraComponent } from './extremadura/extremadura.component';
import { Extremadura1Component } from './extremadura/extremadura1/extremadura1.component';
import { Extremadura2Component } from './extremadura/extremadura2/extremadura2.component';
import { Extremadura3Component } from './extremadura/extremadura3/extremadura3.component';
import { MazarronComponent } from './mazarron/mazarron.component';
import { LeonComponent } from './leon/leon.component';
import { AsturiasComponent } from './asturias/asturias.component';
import { CantabriaComponent } from './cantabria/cantabria.component';
import { AranjuezComponent } from './aranjuez/aranjuez.component';
import { CommonModule } from '@angular/common';
import { SiciliaDatosViajeComponent } from './italia/sicilia/sicilia-datos-viaje/sicilia-datos-viaje.component';
import { Sicilia1Component } from './italia/sicilia/sicilia1/sicilia1.component';

@NgModule({
  declarations: [
    PaginasComponent,
    PaginaSiguienteComponent,
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
    ModalFoto7Component,
    ModalFoto8Component,
    ModalFoto9Component,
    ModalFoto10Component,
    ModalFoto11Component,
    ModalFoto12Component,
    CardsComponent,
    GastosComponent,
    NuevaYorkComponent,
    Ny1Component,
    Ny2Component,
    Ny3Component,
    Ny4Component,
    Ny5Component,
    Washington1Component,
    Washington2Component,
    RomaComponent,
    Roma1Component,
    Roma2Component,
    Roma3Component,
    Roma4Component,
    RumaniaComponent,
    Rumania1Component,
    Rumania2Component,
    Rumania3Component,
    Rumania4Component,
    Rumania5Component,
    Rumania6Component,
    Rumania7Component,
    Rumania8Component,
    Rumania9Component,
    Rumania10Component,
    Rumania11Component,
    Bulgaria1Component,
    Bulgaria2Component,
    Bulgaria3Component,
    Bulgaria4Component,
    Bulgaria5Component,
    ExtremaduraComponent,
    Extremadura1Component,
    Extremadura2Component,
    Extremadura3Component,
    MazarronComponent,
    LeonComponent,
    AsturiasComponent,
    CantabriaComponent,
    AranjuezComponent,
    SiciliaDatosViajeComponent,
    Sicilia1Component
  ],
  exports: [
    CarruselComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    PAGINAS_ROUTES
  ]
})

export class PaginasModule { }
