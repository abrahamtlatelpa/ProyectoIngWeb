import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent extends UsuarioComponent implements OnInit {

  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    super(/*id, nombre, email, contrasena*/);
  }

  ngOnInit(): void {
  }

}
