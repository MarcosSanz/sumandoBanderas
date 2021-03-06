import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulo
import { PaginasModule } from './paginas/paginas.module';

import { AppComponent } from './app.component';
import { CronicaComponent } from './componentes/cronica/cronica.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ErrorComponent } from './paginas/error/error.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CronicaComponent,
    MenuComponent,
    ErrorComponent,
    PrincipalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PaginasModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
