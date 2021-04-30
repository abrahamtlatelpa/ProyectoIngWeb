import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent extends UsuarioComponent implements OnInit {

  Iniciar : boolean = false ;
  apagarBoton : boolean = true ;
  tiempo = 0;

  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    super(/*id, nombre, email, contrasena*/ );
  }

  ngOnInit(): void {
  }

  IniciarExamen(){
    this.Iniciar=true;
    this.apagarBoton=false;
    setTimeout (this.TerminarExamen, 5000);
  }

  TerminarExamen(){
    this.apagarBoton=false;
    this.Iniciar=false;
    alert ('Tiempo terminado');
  }

}
