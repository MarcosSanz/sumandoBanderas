import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from './paginas.component';

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
// Rumania
import { RumaniaComponent } from './rumania/rumania.component';
import { Rumania1Component } from './rumania/rumania1/rumania1.component';
import { Rumania2Component } from './rumania/rumania2/rumania2.component';
import { Rumania3Component } from './rumania/rumania3/rumania3.component';
import { Rumania4Component } from './rumania/rumania4/rumania4.component';
import { Rumania5Component } from './rumania/rumania5/rumania5.component';
import { Rumania6Component } from './rumania/rumania6/rumania6.component';
import { Rumania7Component } from './rumania/rumania7/rumania7.component';
import { Rumania8Component } from './rumania/rumania8/rumania8.component';


const paginasRoutes: Routes = [
  {
    path: '',
    component: PaginasComponent,
    children: [
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

      // Nueva York y Washington
      { path: 'nueva-york', component: NuevaYorkComponent },
      { path: 'ny1', component: Ny1Component },
      { path: 'ny2', component: Ny2Component },
      { path: 'ny3', component: Ny3Component },
      { path: 'ny4', component: Ny4Component },
      { path: 'ny5', component: Ny5Component },
      { path: 'was1', component: Washington1Component },
      { path: 'was2', component: Washington2Component },

      // Rumania
      { path: 'rumania', component: RumaniaComponent },
      { path: 'rumania-datos-viaje', component: Rumania1Component },
      { path: 'rumania-dia-1', component: Rumania2Component },
      { path: 'rumania-dia-2', component: Rumania3Component },
      { path: 'rumania-dia-3', component: Rumania4Component },
      { path: 'rumania-dia-4', component: Rumania5Component },
      { path: 'rumania-dia-5', component: Rumania6Component },
      { path: 'rumania-dia-6', component: Rumania7Component },
      { path: 'rumania-dia-7', component: Rumania8Component },

      { path: '', redirectTo: '/portada', pathMatch: 'full' }
    ]
  }
];

export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);
