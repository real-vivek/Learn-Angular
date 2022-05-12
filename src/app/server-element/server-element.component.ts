import { Component, Input, OnInit, Type, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //The defalt view encapsulation is emulated where the css properties in component are bounded to component itslef
  //If we use ShadowDOM then broswser emulates a shadowDOM where each element has its own shadowDOM behind it, where we can assign style to each element
  //However all browser don't support shadowDOM, it gives similary result to Emulated weher style is bound to component itself
  //If we use None as encapsulation mechanism then the strange attributes are not added and the css properties are added gloablly
  //Thus now the label property define in this component's css file will be applied globally and the label in cockpit component will get the color we have defined here in this component
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  //Created this element with custom type having name, type and content as we are iterating over those properties in HTML
  //If we see error add "strictPropertyInitialization": false in tsconfig.json file in "compilerOptions" object
  //This property will be accessible inside the component and not outside it if we don't have @Input
  //To expose this property so that parent component can bind to it we use @Input() decorator
  //If we want to use the same property outside the component as inside we can give alias in ()
  @Input('servElement') element: { name: string, type: string, content: string };
  constructor() { }

  ngOnInit(): void {
  }

}
