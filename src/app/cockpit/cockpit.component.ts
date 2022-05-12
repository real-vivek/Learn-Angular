import { Component, OnInit,EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  //Name of these properties is same as that in parent components HTML template where they are bound inside ()
  //We add @Output so that these properties are listenable from outside
  //If we want to give other name to event instead of the default property name we can specify it in () as alias
  @Output('srvCreated') serverCreated= new EventEmitter<{name:string,content:string}>();
  @Output() blueprintCreated= new EventEmitter<{name:string,content:string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  // We get the local reference as parameter here
  // The local reference is reference to whole element and not specific property on the HTML element
  onAddServer(serverInputName:HTMLInputElement) {
   this.serverCreated.emit(
     {
       name:serverInputName.value,
       content:this.newServerContent
     }
   );
  }

  onAddBlueprint(serverInputName:HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        name:serverInputName.value,
        content:this.newServerContent
      }
    );
  }

}
