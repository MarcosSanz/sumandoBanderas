import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CronicaComponent } from './componentes/cronica/cronica.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ErrorComponent } from './paginas/error/error.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { PaginasComponent } from './paginas/paginas.component';
import { BerlinComponent } from './paginas/berlin/berlin.component';
import { Berlin1Component } from './paginas/berlin/berlin1/berlin1.component';
import { SiciliaComponent } from './paginas/sicilia/sicilia.component';

@NgModule({
  declarations: [
    AppComponent,
    CronicaComponent,
    PaginasComponent,
    MenuComponent,
    ErrorComponent,
    CarruselComponent,
    BerlinComponent,
    SiciliaComponent,
    Berlin1Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
