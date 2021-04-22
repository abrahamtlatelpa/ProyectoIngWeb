import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { DocenteComponent } from './components/docente/docente.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ExamenComponent} from './components/examen/examen.component'

const routes: Routes = [
  { path: '', component: UsuarioComponent,},
  { path: 'docente', component: DocenteComponent,
  children: [{path: 'examen', component : ExamenComponent}]},
  { path: 'administrador', component: AdministradorComponent,
  children: [{path: '', component : UsuarioComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})


export class AppRoutingModule { }
