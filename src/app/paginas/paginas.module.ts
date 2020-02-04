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
import { ConocenosComponent } from './conocenos/conocenos.component';
import { Sicilia3Component } from './italia/sicilia/sicilia3/sicilia3.component';
import { Sicilia4Component } from './italia/sicilia/sicilia4/sicilia4.component';
import { Sicilia5Component } from './italia/sicilia/sicilia5/sicilia5.component';
import { Sicilia6Component } from './italia/sicilia/sicilia6/sicilia6.component';
import { Sicilia7Component } from './italia/sicilia/sicilia7/sicilia7.component';
import { Sicilia8Component } from './italia/sicilia/sicilia8/sicilia8.component';
import { Sicilia9Component } from './italia/sicilia/sicilia9/sicilia9.component';
import { Sicilia10Component } from './italia/sicilia/sicilia10/sicilia10.component';
import { Sicilia11Component } from './italia/sicilia/sicilia11/sicilia11.component';
import { EstocolmoComponent } from './estocolmo/estocolmo.component';
import { Estocolmo1Component } from './estocolmo/estocolmo1/estocolmo1.component';
import { Estocolmo2Component } from './estocolmo/estocolmo2/estocolmo2.component';
import { Estocolmo3Component } from './estocolmo/estocolmo3/estocolmo3.component';
import { Estocolmo4Component } from './estocolmo/estocolmo4/estocolmo4.component';
import { Estocolmo5Component } from './estocolmo/estocolmo5/estocolmo5.component';
import { EstocolmoDatosViajeComponent } from './estocolmo/estocolmo-datos-viaje/estocolmo-datos-viaje.component';
import { PortugalComponent } from './portugal/portugal.component';
import { Portugal1Component } from './portugal/portugal1/portugal1.component';
import { Portugal2Component } from './portugal/portugal2/portugal2.component';
import { Portugal3Component } from './portugal/portugal3/portugal3.component';
import { Portugal4Component } from './portugal/portugal4/portugal4.component';
import { Portugal5Component } from './portugal/portugal5/portugal5.component';
import { Portugal6Component } from './portugal/portugal6/portugal6.component';
import { Portugal7Component } from './portugal/portugal7/portugal7.component';
import { PortugalDatosViajeComponent } from './portugal/portugal-datos-viaje/portugal-datos-viaje.component';
import { RoadTripComponent } from './eeuu/road-trip-2020/road-trip.component';
import { RoadTripDatosComponent } from './eeuu/road-trip-2020/road-trip-datos/road-trip-datos.component';
import { RoadTrip1Component } from './eeuu/road-trip-2020/road-trip1/road-trip1.component';
import { RoadTrip2Component } from './eeuu/road-trip-2020/road-trip2/road-trip2.component';
import { RoadTrip3Component } from './eeuu/road-trip-2020/road-trip3/road-trip3.component';
import { RoadTrip4Component } from './eeuu/road-trip-2020/road-trip4/road-trip4.component';
import { RoadTrip5Component } from './eeuu/road-trip-2020/road-trip5/road-trip5.component';
import { RoadTrip6Component } from './eeuu/road-trip-2020/road-trip6/road-trip6.component';
import { RoadTrip7Component } from './eeuu/road-trip-2020/road-trip7/road-trip7.component';
import { RoadTrip8Component } from './eeuu/road-trip-2020/road-trip8/road-trip8.component';
import { RoadTrip9Component } from './eeuu/road-trip-2020/road-trip9/road-trip9.component';
import { RoadTrip10Component } from './eeuu/road-trip-2020/road-trip10/road-trip10.component';


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
    Sicilia1Component,
    ConocenosComponent,
    Sicilia3Component,
    Sicilia4Component,
    Sicilia5Component,
    Sicilia6Component,
    Sicilia7Component,
    Sicilia8Component,
    Sicilia9Component,
    Sicilia10Component,
    Sicilia11Component,
    EstocolmoComponent,
    Estocolmo1Component,
    Estocolmo2Component,
    Estocolmo3Component,
    Estocolmo4Component,
    Estocolmo5Component,
    EstocolmoDatosViajeComponent,
    PortugalComponent,
    PortugalDatosViajeComponent,
    Portugal1Component,
    Portugal2Component,
    Portugal3Component,
    Portugal4Component,
    Portugal5Component,
    Portugal6Component,
    Portugal7Component,
    RoadTripComponent,
    RoadTripDatosComponent,
    RoadTrip1Component,
    RoadTrip2Component,
    RoadTrip3Component,
    RoadTrip4Component,
    RoadTrip5Component,
    RoadTrip6Component,
    RoadTrip7Component,
    RoadTrip8Component,
    RoadTrip9Component,
    RoadTrip10Component
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
