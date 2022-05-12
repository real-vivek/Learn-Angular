import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //Name of these properties is same as that in parent components HTML template where they are bound inside ()
  //We add @Output so that these properties are listenable from outside
  @Output() serverCreated= new EventEmitter<{name:string,content:string}>();
  @Output() blueprintCreated= new EventEmitter<{name:string,content:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
   this.serverCreated.emit(
     {
       name:this.newServerName,
       content:this.newServerContent
     }
   );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        name:this.newServerName,
        content:this.newServerContent
      }
    );
  }

}
