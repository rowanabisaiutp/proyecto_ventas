import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './home/cards/cards.component';
import { SomosComponent } from './somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    CardsComponent,
    SomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
