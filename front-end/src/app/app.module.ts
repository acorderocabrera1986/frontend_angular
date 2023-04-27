import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MaterialModule } from './material/material.module';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    MenuComponent,
    ListadoGenericoComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
