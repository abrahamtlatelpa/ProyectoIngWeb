import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent extends UsuarioComponent implements OnInit {
  /*
  @Output() eventoAgregarUs = new EventEmitter <boolean> ();
  @Output() eventoModificarUs = new EventEmitter <boolean> ();
  @Output() eventoBuscarUs = new EventEmitter <boolean> ();
  @Output() eventoEliminarUs = new EventEmitter <boolean> ();

*/
  opAgregarAdm : boolean = false;
  opModificarAdm : boolean = false;
  opBuscarAdm : boolean = false;
  opEliminarAdm : boolean = false;
  opHome: boolean = false;

  


  constructor(/*id : number, nombre : String, email : String, contrasena : String*/) {
    super(/*id, nombre, email, contrasena */);
  }

  ngOnInit(): void {
  }
  
  apagarAdm(){

    this.opAgregarAdm=false;
    this.opModificarAdm=false;
    this.opBuscarAdm=false;
    this.opEliminarAdm=false;
    this.opHome=false;
  }

  op1Adm (){
    this.apagarAdm();
    this.opAgregarAdm=true;
    
  }

  op2Adm (){
    
      this.apagarAdm();
      this.opModificarAdm=true;
  }

  op3Adm (){
    this.apagarAdm();
    this.opBuscarAdm=true;

  }
  
  op4Adm (){
    this.apagarAdm();
    this.opEliminarAdm=true;
    
  }





/*
  EventoAgregarUs(opAgregarUs: boolean) {
    
    this.eventoAgregarUs.emit(this.opAgregarUs);
  }

  EventoModificarUs (opModificarUs: boolean){
    this.eventoModificarUs.emit(opModificarUs)
  }
 
  EventoBuscarUs (opBuscarUs: boolean){
    this.eventoBuscarUs.emit(opBuscarUs)
  }

  EventoEliminarUs (opEliminarUs: boolean){
    this.eventoEliminarUs.emit(opEliminarUs)
  }


  opAgregarUs : boolean = false;
  opModificarUs : boolean = false;
  opBuscarUs : boolean = false;
  opEliminarUs : boolean = false;

  ngOnInit(): void {
  }

  apagarU (){
    this.opAgregarUs = false;
    this.opModificarUs = false;
    this.opBuscarUs = false;
    this.opEliminarUs = false;
  }

  op1U(){
    this.apagarU();
    this.opAgregarUs = true;
  }

  op2U(){
    this.apagarU();
    this.opModificarUs = true;
  }

  op3U(){
    this.apagarU();
    this.opBuscarUs = true;
  }

  op4U(){
    this.apagarU();
    this.opEliminarUs = true;
  }*/




}
