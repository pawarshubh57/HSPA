import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
  // template: `<h1>I am a card</h1>`,
  // styles:['h1 {font-weight:normal}']
})
export class PropertyCardComponent{
  @Input() property : any;

}
