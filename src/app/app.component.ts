import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements= [{
    name:'server1',
    type:'server',
    content:'server1 desc'
  },
  {
    name:'server2',
    type:'blueprint',
    content:'server2 desc'
  }
];

//This code is triggered when event occurs in child component and handling code is in parent component
onServerAdded(server:{name:string,content:string}) {
  console.log('Server created with name:'+server.name+' and content: '+server.content);
  this.serverElements.push({
    name: server.name,
    type: 'server',
    content: server.content
  });
}

onBlueprintAdded(blueprint:{name:string,content:string}) {
  console.log('Blueprint created with name:'+blueprint.name+' and content: '+blueprint.content);
  this.serverElements.push({
    name: blueprint.name,
    type: 'blueprint',
    content: blueprint.content
  });
}
}
