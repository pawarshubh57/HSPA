import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },{
      "Id": 2,
      "Name": "Erose Villa",
      "Type": "Villa",
      "Price": 18000
    },
    {
      "Id": 3,
      "Name": "Western House",
      "Type": "House",
      "Price": 18000
    },
    {
      "Id": 4,
      "Name": "White House",
      "Type": "House",
      "Price": 21000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
