import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';

// Berlin
import { BerlinComponent } from './alemania/berlin/berlin.component';
import { Berlin1Component } from './alemania/berlin/berlin1/berlin1.component';
import { Berlin2Component } from './alemania/berlin/berlin2/berlin2.component';
import { Berlin3Component } from './alemania/berlin/berlin3/berlin3.component';
import { Berlin4Component } from './alemania/berlin/berlin4/berlin4.component';
import { Berlin5Component } from './alemania/berlin/berlin5/berlin5.component';
// Roma
import { RomaComponent } from './italia/roma/roma.component';
import { Roma1Component } from './italia/roma/roma1/roma1.component';
import { Roma2Component } from './italia/roma/roma2/roma2.component';
import { Roma3Component } from './italia/roma/roma3/roma3.component';
import { Roma4Component } from './italia/roma/roma4/roma4.component';
// Sicilia
import { SiciliaComponent } from './italia/sicilia/sicilia.component';
// Nueva York y Washington
import { NuevaYorkComponent } from './eeuu/nueva-york/nueva-york.component';
import { Ny1Component } from './eeuu/nueva-york/ny1/ny1.component';
import { Ny2Component } from './eeuu/nueva-york/ny2/ny2.component';
import { Ny3Component } from './eeuu/nueva-york/ny3/ny3.component';
import { Ny4Component } from './eeuu/nueva-york/ny4/ny4.component';
import { Ny5Component } from './eeuu/nueva-york/ny5/ny5.component';
import { Washington1Component } from './eeuu/washington/washington1/washington1.component';
import { Washington2Component } from './eeuu/washington/washington2/washington2.component';
// Rumanía
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
// Extremadura
import { ExtremaduraComponent } from './extremadura/extremadura.component';
import { Extremadura1Component } from './extremadura/extremadura1/extremadura1.component';
import { Extremadura2Component } from './extremadura/extremadura2/extremadura2.component';
import { Extremadura3Component } from './extremadura/extremadura3/extremadura3.component';
import { MazarronComponent } from './mazarron/mazarron.component';
import { AsturiasComponent } from './asturias/asturias.component';
import { CantabriaComponent } from './cantabria/cantabria.component';
import { AranjuezComponent } from './aranjuez/aranjuez.component';
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
import { EstocolmoDatosViajeComponent } from './estocolmo/estocolmo-datos-viaje/estocolmo-datos-viaje.component';
import { Estocolmo2Component } from './estocolmo/estocolmo2/estocolmo2.component';
import { Estocolmo3Component } from './estocolmo/estocolmo3/estocolmo3.component';
import { Estocolmo4Component } from './estocolmo/estocolmo4/estocolmo4.component';
import { Estocolmo5Component } from './estocolmo/estocolmo5/estocolmo5.component';
import { PortugalComponent } from './portugal/road-trip/portugal.component';
import { Portugal1Component } from './portugal/road-trip/portugal1/portugal1.component';
import { Portugal2Component } from './portugal/road-trip/portugal2/portugal2.component';
import { Portugal3Component } from './portugal/road-trip/portugal3/portugal3.component';
import { Portugal4Component } from './portugal/road-trip/portugal4/portugal4.component';
import { Portugal5Component } from './portugal/road-trip/portugal5/portugal5.component';
import { Portugal6Component } from './portugal/road-trip/portugal6/portugal6.component';
import { PortugalDatosViajeComponent } from './portugal/road-trip/portugal-datos-viaje/portugal-datos-viaje.component';
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
// Ávila
import { AvilaComponent } from './castilla/avila/avila.component';
// León
import { LeonComponent } from './castilla/leon/leon.component';
// Cuenca
import { CuencaComponent } from './castilla/cuenca/cuenca.component';
// Hamburgo
import { HamburgoComponent } from './alemania/hamburgo/hamburgo.component';
import { Hamburgo1Component } from './alemania/hamburgo/hamburgo/hamburgo1.Component';
import { StadeYNeuengammeComponent } from './alemania/hamburgo/stade-y-neuengamme/stade-y-neuengamme.component';
// Tavira
import { TaviraComponent } from './portugal/tavira/tavira.component';
import { BremenComponent } from './alemania/hamburgo/bremen/bremen.component';


const paginasRoutes: Routes = [
    {
        path: '',
        component: PaginasComponent,
        children: [
            // Extremadura
            { path: 'extremadura', component: ExtremaduraComponent, },
            { path: 'extremadura-dia-1', component: Extremadura1Component, },
            { path: 'extremadura-dia-2', component: Extremadura2Component, },
            { path: 'extremadura-dia-3', component: Extremadura3Component, },
            // Mazarron y Cartagena
            { path: 'mazarron', component: MazarronComponent, },
            // Leon
            { path: 'leon', component: LeonComponent, },
            // Asturias
            { path: 'asturias', component: AsturiasComponent, },
            // Cantabria
            { path: 'cantabria', component: CantabriaComponent, },
            // Aranjuez
            { path: 'aranjuez', component: AranjuezComponent, },

            // Berlin
            { path: 'berlin', component: BerlinComponent, },
            { path: 'berlin-dia-1', component: Berlin1Component },
            { path: 'berlin-dia-2', component: Berlin2Component },
            { path: 'berlin-dia-3', component: Berlin3Component },
            { path: 'berlin-dia-4', component: Berlin4Component },
            { path: 'berlin-dia-5', component: Berlin5Component },

            // Roma
            { path: 'roma', component: RomaComponent },
            { path: 'roma-dia-1', component: Roma1Component },
            { path: 'roma-dia-2', component: Roma2Component },
            { path: 'roma-dia-3', component: Roma3Component },
            { path: 'roma-dia-4', component: Roma4Component },

            // Sicilia
            { path: 'sicilia', component: SiciliaComponent },
            { path: 'sicilia-datos-viaje', component: SiciliaDatosViajeComponent },
            { path: 'sicilia-dia-1y2', component: Sicilia1Component },
            { path: 'sicilia-dia-3', component: Sicilia3Component },
            { path: 'sicilia-dia-4', component: Sicilia4Component },
            { path: 'sicilia-dia-5', component: Sicilia5Component },
            { path: 'sicilia-dia-6', component: Sicilia6Component },
            { path: 'sicilia-dia-7', component: Sicilia7Component },
            { path: 'sicilia-dia-8', component: Sicilia8Component },
            { path: 'sicilia-dia-9', component: Sicilia9Component },
            { path: 'sicilia-dia-10', component: Sicilia10Component },
            { path: 'sicilia-dia-11', component: Sicilia11Component },

            // Nueva York y Washington
            { path: 'nueva-york', component: NuevaYorkComponent },
            { path: 'ny1', component: Ny1Component },
            { path: 'ny2', component: Ny2Component },
            { path: 'ny3', component: Ny3Component },
            { path: 'ny4', component: Ny4Component },
            { path: 'ny5', component: Ny5Component },
            { path: 'was1', component: Washington1Component },
            { path: 'was2', component: Washington2Component },

            // Rumanía
            { path: 'rumania-y-bulgaria', component: RumaniaComponent },
            { path: 'rumania-datos-viaje', component: Rumania1Component },
            { path: 'rumania-dia-1', component: Rumania2Component },
            { path: 'rumania-dia-2', component: Rumania3Component },
            { path: 'rumania-dia-3', component: Rumania4Component },
            { path: 'rumania-dia-4', component: Rumania5Component },
            { path: 'rumania-dia-5', component: Rumania6Component },
            { path: 'rumania-dia-6', component: Rumania7Component },
            { path: 'rumania-dia-7', component: Rumania8Component },
            { path: 'rumania-dia-8', component: Rumania9Component },
            { path: 'rumania-dia-9', component: Rumania10Component },
            { path: 'rumania-dia-10', component: Rumania11Component },
            // Bulgaria
            { path: 'bulgaria-dia-1', component: Bulgaria1Component },
            { path: 'bulgaria-dia-2', component: Bulgaria2Component },
            { path: 'bulgaria-dia-3', component: Bulgaria3Component },
            { path: 'bulgaria-dia-4', component: Bulgaria4Component },
            { path: 'bulgaria-dia-5', component: Bulgaria5Component },

            // Estocolmo
            { path: 'estocolmo', component: EstocolmoComponent },
            { path: 'estocolmo-datos-viaje', component: EstocolmoDatosViajeComponent },
            { path: 'estocolmo-dia-1', component: Estocolmo1Component },
            { path: 'estocolmo-dia-2', component: Estocolmo2Component },
            { path: 'estocolmo-dia-3', component: Estocolmo3Component },
            { path: 'estocolmo-dia-4', component: Estocolmo4Component },
            { path: 'estocolmo-dia-5', component: Estocolmo5Component },

            // Portugal
            { path: 'portugal', component: PortugalComponent },
            { path: 'portugal-datos-viaje', component: PortugalDatosViajeComponent },
            { path: 'portugal-dia-1', component: Portugal1Component },
            { path: 'portugal-dia-2', component: Portugal2Component },
            { path: 'portugal-dia-3', component: Portugal3Component },
            { path: 'portugal-dia-4', component: Portugal4Component },
            { path: 'portugal-dia-5', component: Portugal5Component },
            { path: 'portugal-dia-6', component: Portugal6Component },

            //   RoadTrip por EEUU
            { path: 'roadtrip-eeuu', component: RoadTripComponent },
            { path: 'roadtrip-eeuu-datos-viaje', component: RoadTripDatosComponent },
            { path: 'roadtrip-eeuu-dia-1', component: RoadTrip1Component },
            { path: 'roadtrip-eeuu-dia-2', component: RoadTrip2Component },
            { path: 'roadtrip-eeuu-dia-3', component: RoadTrip3Component },
            { path: 'roadtrip-eeuu-dia-4', component: RoadTrip4Component },
            { path: 'roadtrip-eeuu-dia-5', component: RoadTrip5Component },
            { path: 'roadtrip-eeuu-dia-6', component: RoadTrip6Component },
            { path: 'roadtrip-eeuu-dia-7', component: RoadTrip7Component },
            { path: 'roadtrip-eeuu-dia-8', component: RoadTrip8Component },
            { path: 'roadtrip-eeuu-dia-9', component: RoadTrip9Component },
            { path: 'roadtrip-eeuu-dia-10', component: RoadTrip10Component },

            // Ávila
            { path: 'avila', component: AvilaComponent },

            // Cuenca
            { path: 'cuenca', component: CuencaComponent },

            // Hamburgo
            { path: 'norte-alemania-3días', component: HamburgoComponent },
            { path: 'hamburgo', component: Hamburgo1Component },
            { path: 'stade-y-neuengamme', component: StadeYNeuengammeComponent },
            { path: 'bremen', component: BremenComponent },

            // Tavira
            { path: 'tavira', component: TaviraComponent },

            { path: 'conocenos', component: ConocenosComponent },
            { path: 'portada', component: PrincipalComponent },

            { path: '', redirectTo: '/portada', pathMatch: 'full' }
        ]
    }
];

export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);
