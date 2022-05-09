import { Component } from "@angular/core";

//To create new component without using cli create a folder with component name and create html,css and ts file
@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})
//We export this class because we need to register it in app module
export class StudentComponent{

}