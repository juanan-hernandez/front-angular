import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { app_routing } from './app.router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { ContactoComponent } from './contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    HeaderComponent,
    ContactoComponent
],
  imports: [
    BrowserModule,
    app_routing,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
