import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './paginas/portada/portada.component';
import { ErrorComponent } from './paginas/error/error.component';

const APP_ROUTES: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
