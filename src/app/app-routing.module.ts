import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { DocenteComponent } from './components/docente/docente.component';
import { ExamenComponent} from './components/examen/examen.component'
import { LogeoComponent } from './components/logeo/logeo.component';
import { AlumnoComponent } from './components/alumno/alumno.component';


const routes:Routes = [
  { 
    path: '',
    component: LogeoComponent,
    children : [
    {
      path: 'administrador',
      component : AdministradorComponent,
      children : [
        {
          path: 'usuario',
          component: UsuarioComponent,
        },
      ],
    },
    {
      path: 'docente',
      component: DocenteComponent,
      children : [
        {
          path: 'examen',
          component: ExamenComponent,
        },
      ],
    },
    {
      path: 'alumno',
      component: AlumnoComponent,
    },
  ],
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})


export class AppRoutingModule { }
