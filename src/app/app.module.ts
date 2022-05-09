import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

//Module is used to bundle different pieces together in package
//AppModule mmodule is a module that bundles all our application components
@NgModule({
  //Here we have entry of all the components in our application
  //We do this because Angular doesn't automatically scan our folders to find the components
  //Register the component created with angular by having an entry in declarations array
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //Here we tell angular which components it needs to bootstrap(know/load) before starting the application
  //Appcomponent holds our entire application
  //Angular analyses this component read the setup we pass in this module and this is how it comes to know app-root selector in index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
