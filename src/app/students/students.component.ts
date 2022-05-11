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
  studentName='Test Name';
  studentCreated=false;
  studentList=['Student1','Student2'];

    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000)
    }

  ngOnInit(): void {
  }
  
  onStudentCreation(){
    this.studentCreated=true;
    this.studentList.push(this.studentName);
    this.studentCreationStatus='Student was created with name: '+this.studentName;
  }

  onUpdateStudentName(event:any){
    this.studentName=event.target.value;
  }
}
