import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/ApiRequest/Geobyte/admin.service';
import { DestinationDto, Destinationroute } from 'src/app/models/destinationroute';
import { Hub } from 'src/app/models/hub';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  waypointobject: any;
  waypointarray = [];
  routes: string[] = []
  index: any;
  iswarning: boolean;
  checkboxdisplay: string;
  place: string[] = [];
  data: any;
  start: string;
  end: string;
  hubs = new Map<string,any>();
  totalDistance: number = 0;
  destination: DestinationDto;
  destinatioroute: Destinationroute;
  // hubs = new Map([
  //   // ["abuja", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "abuja" }],
  //   // ["kano", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "kano" }],
  //   // ["kaduna", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "kaduna" }],
  //   // ["lagos", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "lagos" }],
  //   // ["katsina", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "katsina" }],
  //   // ["osun", { latitude: "213-555-1234", longitude: "123 N 1st Ave", city: "osun" }]
  // ]);



  constructor(private admin: AdminService) { }

  async ngOnInit(): Promise<void> {
    this.data = await this.admin.getAllHubs();
    this.data.forEach((hub) => {
      this.hubs.set(hub.city, hub)
    });
    console.log(this.hubs)
    this.hubs.forEach((value) => {
      this.place.push(value.city);
    });
  }

  originchanged(start: string) {
    this.start = start;
  }

  destinationchanged(end: string) {
    this.end = end;
  }

  waypointselected(waypoint: { target: { value: string; checked: boolean; }; }) {
    this.waypointobject = this.hubs.get(waypoint.target.value)

    if (waypoint.target.checked) 
    {
          if (this.waypointarray.length < 4)
          {
              if (this.waypointarray.length < 1) 
              {
                this.iswarning = true;
                this.checkboxdisplay = "A minumum of two waypoints is required";
              }
              else
              {
                this.iswarning = false;
              }
              if (this.waypointarray.includes(this.waypointobject))
              {
                this.index = this.waypointarray.indexOf(this.waypointobject);
                this.waypointarray.splice(this.index, 1);
                console.log(JSON.stringify(this.waypointarray));
              }
              else 
              {
                this.waypointobject = this.hubs.get(waypoint.target.value)
                this.waypointarray.push(this.waypointobject);
                console.log(JSON.stringify(this.waypointarray));
              }
          }
          else 
          {
            this.iswarning = true;
            this.checkboxdisplay = "Four waypoints are maximum";
            waypoint.target.checked = false;
          }

    } 
    else 
    {
          this.index = this.waypointarray.indexOf(this.waypointobject);
          this.waypointarray.splice(this.index, 1);
          console.log(JSON.stringify(this.waypointarray));
    }
  }

  async saveroute(){
    for (let i = 0; i < this.waypointarray.length - 1; i++) {
      this.totalDistance += this.getdistance(this.waypointarray[i].latitude, this.waypointarray[i].longitude,
        this.waypointarray[i + 1].latitude, this.waypointarray[i + 1].longitude);
    }
    console.log(this.totalDistance);
    //Fill Model
    this.destination = {
      StartCity: this.start,
      EndCity: this.end,
      RouteDistance: this.totalDistance
    };
    this.waypointarray.forEach((place) => {
      this.routes.push(place.city);
    });
    this.destinatioroute = {
      destinationdto: this.destination,
      routes: this.routes
    };
    //save to db
    // let response = await this.admin.registerRoutesAndDestinations(this.destinatioroute);
    // console.log(response)
    // this.iswarning = true;
    this.checkboxdisplay = "SUCCESS ";

  }

  getdistance(latitudePoint1: number, longitudePoint1: number,
    latitudePoint2: number, longitudePoint2: number): number
  {
    console.log('distance called and calculating')

    let radius = 6371; // DISTANCE OF THE EARTH IN KM
    let latdistance = this.toRadians(latitudePoint2 - latitudePoint1);
    let londistane =  this.toRadians(longitudePoint2 - longitudePoint1);
    let a = 
        Math.sin(latdistance/2) * Math.sin(latdistance/2) +
        Math.cos(this.toRadians(latitudePoint2)) * Math.cos(this.toRadians(latitudePoint1)) *
        Math.sin(londistane/2) * Math.sin(londistane/2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let distance = c * radius;
    console.log('distance ended calculating')
    return Math.round(distance);
  }

  toRadians(angle: number): number{
    return (Math.PI/180) * angle;
  }

}
