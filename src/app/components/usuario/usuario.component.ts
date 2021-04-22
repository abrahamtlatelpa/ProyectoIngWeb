import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

   /*Id : number = 0;
   Nombre : String = '';
   Email : String = '';
   Contrsena : String = '';*/
  

  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    /*
    this.Id = id ; 
    this.Nombre = nombre;
    this.Email = email;
    this.Contrsena = contrasena;*/


   }

  ngOnInit(): void {

  }

  IniciarSesion() {
    alert ('hola');
  }

  

}
