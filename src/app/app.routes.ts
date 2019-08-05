import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from './paginas/paginas.component';

import { ErrorComponent } from './paginas/error/error.component';

const appRoutes: Routes = [
  { path: 'portada', component: PaginasComponent },
  { path: '**', component: ErrorComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
