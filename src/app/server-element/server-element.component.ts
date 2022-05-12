import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //Created this element with custom type having name, type and content as we are iterating over those properties in HTML
  //If we see error add "strictPropertyInitialization": false in tsconfig.json file in "compilerOptions" object
  //This property will be accessible inside the component and not outside it if we don't have @Input
  //To expose this property so that parent component can bind to it we use @Input() decorator
  @Input() element: { name: string, type: string, content: string };
  constructor() { }

  ngOnInit(): void {
  }

}
