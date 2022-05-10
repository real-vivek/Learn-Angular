import { Component } from "@angular/core";

//To create new component without using cli create a folder with component name and create html,css and ts file
@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styles:[`
    .online{
        color:white
    }
    `]
})
//We export this class because we need to register it in app module
export class StudentComponent{
    //number can be converted to string so it can be used for string interpolcation
    studentId=1;
    studentStatus='present';
    constructor(){
        this.studentStatus=Math.random()>0.5?'present':'absent';
    }
    getColor(){
        return this.studentStatus=='present'?'green':'red';
    }
}