import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { CronicaComponent } from './componentes/cronica/cronica.component';
import { PortadaComponent } from './paginas/portada/portada.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ErrorComponent } from './paginas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CronicaComponent,
    PortadaComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
