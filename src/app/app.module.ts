import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { DocenteComponent } from './components/docente/docente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ExamenComponent } from './components/examen/examen.component';
import { RouteModule } from './route.module';
import { LogeoComponent } from './components/logeo/logeo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AlumnoComponent,
    DocenteComponent,
    AdministradorComponent,
    ExamenComponent,
    LogeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


