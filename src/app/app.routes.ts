import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './paginas/error/error.component';
import { PaginasComponent } from './paginas/paginas.component';
import { BerlinComponent } from './paginas/berlin/berlin.component';
import { SiciliaComponent } from './paginas/sicilia/sicilia.component';

const appRoutes: Routes = [
  { path: 'portada', component: PaginasComponent },
  { path: 'berlin', component: BerlinComponent },
  { path: 'sicilia', component: SiciliaComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
