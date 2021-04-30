import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})



export class ExamenComponent implements OnInit {

  @Input () opAgregar1 : boolean | undefined;
  @Input () opModificar2 : boolean | undefined;
  @Input () opBuscar3 : boolean | undefined;
  @Input () opEliminar4 : boolean | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
