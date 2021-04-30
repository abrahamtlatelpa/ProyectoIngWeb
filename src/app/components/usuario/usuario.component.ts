import { Component, OnInit, Input} from '@angular/core';

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
   @Input () opAgregar1Adm : boolean | undefined;
   @Input () opModificar2Adm : boolean | undefined;
   @Input () opBuscar3Adm : boolean | undefined;
   @Input () opEliminar4Adm : boolean | undefined;


  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    /*
    this.Id = id ; 
    this.Nombre = nombre;
    this.Email = email;
    this.Contrsena = contrasena;*/


   }

  ngOnInit(): void {

  }
  /*
  recibeAgregarUs(Agregar : boolean){
    this.opAgregarUs1=Agregar;
    alert ('agregar '+this.opAgregarUs1)
   
  }
  recibeModificarUs(Modificar : boolean){
    this.opModificarUs2=Modificar;
    alert ('modificar '+this.opModificarUs2)
    
  }
  recibeBuscarUs(Buscar : boolean){
    this.opBuscarUs3=Buscar;
    alert ('buscar '+this.opBuscarUs3)
    
  }
  recibeEliminarUs(Eliminar : boolean){
    this.opEliminarUs4=Eliminar;
    alert ('eliminar '+this.opEliminarUs4)
    
  }
  

  


  IniciarSesion() {
    alert ('hola');
  }*/

  
  

}
