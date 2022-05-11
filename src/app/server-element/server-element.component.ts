import { Component, Input, OnInit, Type } from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //Created this element with custom type having name, type and content
  //If we see error add "strictPropertyInitialization": false in tsconfig.json file in "compilerOptions" object
  element: { name: string, type: string, content: string };
  constructor() { }

  ngOnInit(): void {
  }

}
