import { Component } from "@angular/core";

//To create new component without using cli create a folder with component name and create html,css and ts file
@Component({
    selector:'.app-student',
    template:'<h2>Student Component Works!<h2><br><h3>Hello there</h3>',
    styles:[`
        h2{
            color: red
        }
    `,
        `
        h3{
            color: blue
        }
        `
]
})
//We export this class because we need to register it in app module
export class StudentComponent{

}