import { Component, OnInit } from '@angular/core';

//To create component using cli use the command: ng generate component componentName 
//Also we can use: ng g c componentName
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  allowNewServer=false;
    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000)
    }

  ngOnInit(): void {
  }

}
