//We use {} because we need to import only Component from @angular/core and not other things
import { Component } from '@angular/core';

//Component is simple typescript class
//All our components selector will not be added to index.html file but to app component's html file as it is root component
//We use @Component decorator to tell it is not normal class but instead a special component
//Decorators are typescript features we pass javascript object here to configure the component this setup info will be stored as metadata for the class
//Angular uses components to build web pages and modules to bundle different pieces into packages
@Component({
  //Here we have used element selector which is similar selector used in CSS we can also use attribute selector as by having [app-root] and passing <div app-root> in html file
  //Also we can use class selector by having .app-root here and <div class="app-root"> in html
  //Selecting with id doesn't work as well as sudo selectors like hover don't work
  selector: 'app-root',

  //Here we can give template and specify html code directly
  templateUrl: './app.component.html',


  //Here we can use styles array and specify array of string like:[`h3{color:blue}`]
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
}
