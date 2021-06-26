import { Component, OnInit } from '@angular/core';
import { HubsComponent } from '../hubs/hubs.component';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  waypointobject: any;
  waypointarray = [];
  index: any;
  iswarning: boolean;
  checkboxdisplay: string;
  place = [];
  hubs = new Map([
    ["abuja", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "abuja" }],
    ["kano", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "kano" }],
    ["kaduna", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "kaduna" }],
    ["lagos", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "lagos" }],
    ["katsina", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "katsina" }],
    ["osun", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "osun" }]
  ]);



  constructor() { }

  ngOnInit(): void {
    this.hubs.forEach((key) => {
      this.place.push(key.city);
    })
  }

  originchanged(start: string) {
    console.log("Start: " + start)
  }

  destinationchanged(end: string) {
    console.log("End: " + end)
  }

  waypointselected(waypoint: { target: { value: string; checked: boolean; }; }) {
    this.waypointobject = this.hubs.get(waypoint.target.value)

    if (waypoint.target.checked) {
      if (this.waypointarray.length < 4) {
        if (this.waypointarray.length < 1) {
          this.iswarning = true;
          this.checkboxdisplay = "A minumum of two waypoints is required";
        }
        else {
          this.iswarning = false;
        }
        if (this.waypointarray.includes(this.waypointobject)) {
          this.index = this.waypointarray.indexOf(this.waypointobject);
          this.waypointarray.splice(this.index, 1);
          console.log(JSON.stringify(this.waypointarray));
        } else {
          this.waypointobject = this.hubs.get(waypoint.target.value)
          this.waypointarray.push(this.waypointobject);
          console.log(JSON.stringify(this.waypointarray));
        }
      }
      else {
        this.iswarning = true;
        this.checkboxdisplay = "Four waypoints are maximum";
        waypoint.target.checked = false;
      }
    } else {
      this.index = this.waypointarray.indexOf(this.waypointobject);
      this.waypointarray.splice(this.index, 1);
      console.log(JSON.stringify(this.waypointarray));
    }
  }

}
