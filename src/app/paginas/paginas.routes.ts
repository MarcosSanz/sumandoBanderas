import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from './paginas.component';

// Berlin
import { BerlinComponent } from './berlin/berlin.component';
import { Berlin1Component } from './berlin/berlin1/berlin1.component';
import { Berlin2Component } from './berlin/berlin2/berlin2.component';
import { Berlin3Component } from './berlin/berlin3/berlin3.component';
import { Berlin4Component } from './berlin/berlin4/berlin4.component';
import { Berlin5Component } from './berlin/berlin5/berlin5.component';

// Sicilia
import { SiciliaComponent } from './sicilia/sicilia.component';

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

      // Sicilia
      { path: 'sicilia', component: SiciliaComponent },

      { path: '', redirectTo: '/portada', pathMatch: 'full' }
    ]
  }
];

export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);
