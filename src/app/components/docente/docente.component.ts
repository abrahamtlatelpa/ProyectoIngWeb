import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})

export class DocenteComponent extends UsuarioComponent implements OnInit {

  opAgregar : boolean = false;
  opModificar : boolean = false;
  opBuscar : boolean = false;
  opEliminar : boolean = false;
  opHome: boolean = false;

  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    super(/*id, nombre, email, contrasena*/);
  }


  ngOnInit(): void {
  }
  
  apagar(){

    this.opAgregar=false;
    this.opModificar=false;
    this.opBuscar=false;
    this.opEliminar=false;
    this.opHome=false;
  }

  op1 (){
    this.apagar();
    this.opAgregar=true;
    
  }

  op2 (){
    
      this.apagar();
      this.opModificar=true;
  }

  op3 (){
    this.apagar();
    this.opBuscar=true;

  }
  
  op4 (){
    this.apagar();
    this.opEliminar=true;
    
  }





}

