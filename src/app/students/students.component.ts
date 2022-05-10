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
  studentCreationStatus='No server was created';
  studentName='';

    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000)
    }

  ngOnInit(): void {
  }
  
  onStudentCreation(){
    this.studentCreationStatus='Student was created';
  }

  onUpdateStudentName(event:any){
    this.studentName=event.target.value;
  }
}
