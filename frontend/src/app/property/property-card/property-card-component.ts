import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
  // template: `<h1>I am a card</h1>`,
  // styles:['h1 {font-weight:normal}']
})
export class PropertyCardComponent{
  Property : any = {
    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  }
}
