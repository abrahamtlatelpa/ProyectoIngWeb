import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent extends UsuarioComponent implements OnInit {

  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    super(/*id, nombre, email, contrasena*/ );
  }

  ngOnInit(): void {
  }

}
