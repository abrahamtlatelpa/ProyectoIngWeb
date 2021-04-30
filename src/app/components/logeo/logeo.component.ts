import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.css']
})
export class LogeoComponent implements OnInit {
   
login : boolean = true;

constructor() { }

ngOnInit(): void {
}

loginAct (){
  this.login = false;
}

  

}
