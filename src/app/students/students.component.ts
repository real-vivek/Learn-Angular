import { Component, OnInit } from '@angular/core';

//To create component using cli use the command: ng generate component componentName 
//Also we can use: ng g c componentName
@Component({
  //Here instead of using element selector we have used attribute selector
  selector: '[app-students]',
  //Here we have used template instead of templateUrl and directly specified the html code here
  template: `
  <h1>Students component works!
  `,
  //Here we have used styles instead of stylesUrl and directly specified the html code here
  styles: [`
      h1{
        color: green
      }
  `]
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
