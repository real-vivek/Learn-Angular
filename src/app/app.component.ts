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
}
