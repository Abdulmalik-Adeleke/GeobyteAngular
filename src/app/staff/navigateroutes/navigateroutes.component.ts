import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'app-navigateroutes',
  templateUrl: './navigateroutes.component.html',
  styleUrls: ['./navigateroutes.component.css']
})
export class NavigateroutesComponent implements OnInit {

  constructor(private shareddata: ShareddataService, private router: Router) { }

  ngOnInit(): void {
  }


  startcity = ['lagos', 'abuja', 'kaduna'];
  radius: any = "default";
  results =  [
            {
                "routeId": "debe7764-0170-4a46-8cb4-6ea864d52d90",
                "data": [
                    {
                        "latitude": 6.50343,
                        "longitude": 3.350399,
                        "hubAddress": "Some address in center of lagos",
                        "hubFee": 30,
                        "deliveryAddresses": [
                            {
                                "id": 30,
                                "userName": "user30",
                                "latitude": 6.4914909,
                                "longitude": 3.3566432,
                                "orderAddress": "Shoprite Surulere",
                                "distanceFromOrigin": 1,
                                "fee": 31,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    }
                                ]
                            },
                            {
                                "id": 31,
                                "userName": "user31",
                                "latitude": 6.5188594,
                                "longitude": 3.3745688,
                                "orderAddress": "YabaTech,",
                                "distanceFromOrigin": 3,
                                "fee": 33,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    }
                                ]
                            },
                            {
                                "id": 32,
                                "userName": "user32",
                                "latitude": 6.4404713,
                                "longitude": 3.4959122,
                                "orderAddress": "Spar Lekki",
                                "distanceFromOrigin": 18,
                                "fee": 48,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "latitude": 8.4992341,
                        "longitude": 4.551918,
                        "hubAddress": "balogun fulani rd, ilorin post office",
                        "hubFee": 44,
                        "deliveryAddresses": [
                            {
                                "id": 12,
                                "userName": "user13",
                                "latitude": 8.4992341,
                                "longitude": 4.5497239,
                                "orderAddress": "Post Office. Balogun Fulani, Kwara",
                                "distanceFromOrigin": 258,
                                "fee": 332,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            },
                            {
                                "id": 13,
                                "userName": "user14",
                                "latitude": 8.4758467,
                                "longitude": 4.5400465,
                                "orderAddress": "Kwara State Stadium",
                                "distanceFromOrigin": 256,
                                "fee": 330,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            },
                            {
                                "id": 14,
                                "userName": "user15",
                                "latitude": 8.4766532,
                                "longitude": 4.5612682,
                                "orderAddress": "Ilorin Golf Course",
                                "distanceFromOrigin": 257,
                                "fee": 331,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            },
                            {
                                "id": 15,
                                "userName": "user16",
                                "latitude": 8.5048791,
                                "longitude": 4.5134176,
                                "orderAddress": "University Of Ilorin",
                                "distanceFromOrigin": 257,
                                "fee": 331,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "latitude": 13.0554932,
                        "longitude": 5.2403176,
                        "hubAddress": "sokoto",
                        "hubFee": 72,
                        "deliveryAddresses": [
                            {
                                "id": 16,
                                "userName": "user17",
                                "latitude": 13.0554932,
                                "longitude": 5.2403176,
                                "orderAddress": "Atiku rd, Sokoto",
                                "distanceFromOrigin": 757,
                                "fee": 903,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 13.0554932,
                                        "longitude": 5.2403176,
                                        "hubFee": 72
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "latitude": 11.5260419,
                        "longitude": 7.3077512,
                        "hubAddress": "Funtua nipost",
                        "hubFee": 68,
                        "deliveryAddresses": [
                            {
                                "id": 18,
                                "userName": "user19",
                                "latitude": 11.5261418,
                                "longitude": 7.3092988,
                                "orderAddress": "Funtua LGA",
                                "distanceFromOrigin": 708,
                                "fee": 922,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 13.0554932,
                                        "longitude": 5.2403176,
                                        "hubFee": 72
                                    },
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 11.5260419,
                                        "longitude": 7.3077512,
                                        "hubFee": 68
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            },
                            {
                                "id": 19,
                                "userName": "user20",
                                "latitude": 11.4879421,
                                "longitude": 7.3076573,
                                "orderAddress": "School Of Basic and Remedial Studies, Funtua, Bakori Rd",
                                "distanceFromOrigin": 704,
                                "fee": 918,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 13.0554932,
                                        "longitude": 5.2403176,
                                        "hubFee": 72
                                    },
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 11.5260419,
                                        "longitude": 7.3077512,
                                        "hubFee": 68
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "latitude": 11.83371,
                        "longitude": 13.17719,
                        "hubAddress": "nipost center of maiduguri",
                        "hubFee": 30,
                        "deliveryAddresses": [
                            {
                                "id": 1,
                                "userName": "USER1",
                                "latitude": 11.8333342,
                                "longitude": 13.1589154,
                                "orderAddress": "Government House, Lagos Street, Maiduguri",
                                "distanceFromOrigin": 1229,
                                "fee": 1443,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 13.0554932,
                                        "longitude": 5.2403176,
                                        "hubFee": 72
                                    },
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 11.5260419,
                                        "longitude": 7.3077512,
                                        "hubFee": 68
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "userName": "user2",
                                "latitude": 11.7011005,
                                "longitude": 13.0581763,
                                "orderAddress": "Kawa Maiduguri / Gombe Rd",
                                "distanceFromOrigin": 1212,
                                "fee": 1426,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 13.0554932,
                                        "longitude": 5.2403176,
                                        "hubFee": 72
                                    },
                                    {
                                        "latitude": 11.5260419,
                                        "longitude": 7.3077512,
                                        "hubFee": 68
                                    },
                                    {
                                        "latitude": 8.4992341,
                                        "longitude": 4.551918,
                                        "hubFee": 44
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "routeDistance": 1500,
                "totalDistance": 3494
            },
            {
                "routeId": "ee95f7d7-7e7e-4682-85c3-076766305c6b",
                "data": [
                    {
                        "latitude": 6.50343,
                        "longitude": 3.350399,
                        "hubAddress": "Some address in center of lagos",
                        "hubFee": 30,
                        "deliveryAddresses": [
                            {
                                "id": 30,
                                "userName": "user30",
                                "latitude": 6.4914909,
                                "longitude": 3.3566432,
                                "orderAddress": "Shoprite Surulere",
                                "distanceFromOrigin": 1,
                                "fee": 31,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    }
                                ]
                            },
                            {
                                "id": 31,
                                "userName": "user31",
                                "latitude": 6.5188594,
                                "longitude": 3.3745688,
                                "orderAddress": "YabaTech,",
                                "distanceFromOrigin": 3,
                                "fee": 33,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    }
                                ]
                            },
                            {
                                "id": 32,
                                "userName": "user32",
                                "latitude": 6.4404713,
                                "longitude": 3.4959122,
                                "orderAddress": "Spar Lekki",
                                "distanceFromOrigin": 18,
                                "fee": 48,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "latitude": 4.9631293,
                        "longitude": 8.3133912,
                        "hubAddress": "calabar road",
                        "hubFee": 90,
                        "deliveryAddresses": [
                            {
                                "id": 21,
                                "userName": "user22",
                                "latitude": 4.9490361,
                                "longitude": 8.3351705,
                                "orderAddress": "University Of Calabar",
                                "distanceFromOrigin": 578,
                                "fee": 698,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 4.9631293,
                                        "longitude": 8.3133912,
                                        "hubFee": 90
                                    }
                                ]
                            },
                            {
                                "id": 22,
                                "userName": "user23",
                                "latitude": 4.957584,
                                "longitude": 8.3284735,
                                "orderAddress": "Botanic Gardens Bogoberi",
                                "distanceFromOrigin": 577,
                                "fee": 697,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 4.9631293,
                                        "longitude": 8.3133912,
                                        "hubFee": 90
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "latitude": 8.325875,
                        "longitude": 10.755038,
                        "hubAddress": "jalingo",
                        "hubFee": 100,
                        "deliveryAddresses": []
                    },
                    {
                        "latitude": 11.83371,
                        "longitude": 13.17719,
                        "hubAddress": "nipost center of maiduguri",
                        "hubFee": 30,
                        "deliveryAddresses": [
                            {
                                "id": 1,
                                "userName": "USER1",
                                "latitude": 11.8333342,
                                "longitude": 13.1589154,
                                "orderAddress": "Government House, Lagos Street, Maiduguri",
                                "distanceFromOrigin": 1229,
                                "fee": 1449,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 8.325875,
                                        "longitude": 10.755038,
                                        "hubFee": 100
                                    },
                                    {
                                        "latitude": 4.9631293,
                                        "longitude": 8.3133912,
                                        "hubFee": 90
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "userName": "user2",
                                "latitude": 11.7011005,
                                "longitude": 13.0581763,
                                "orderAddress": "Kawa Maiduguri / Gombe Road   ",
                                "distanceFromOrigin": 1212,
                                "fee": 1432,
                                "hubsVisitedPlusDestination": [
                                    {
                                        "latitude": 11.83371,
                                        "longitude": 13.17719,
                                        "hubFee": 30
                                    },
                                    {
                                        "latitude": 8.325875,
                                        "longitude": 10.755038,
                                        "hubFee": 100
                                    },
                                    {
                                        "latitude": 4.9631293,
                                        "longitude": 8.3133912,
                                        "hubFee": 90
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "routeDistance": 3000,
                "totalDistance": 3072
            }
        ]; 
  destinations:any;
  destination: string;
  origin: string;
  pickedroute:any;

  originchanged(start: string) {
    // api call
    this.destinations = this.startcity; 
    console.log(this.destinations);
  }

  destinationchanged(end: string) {
    this.destination = end;
    console.log("you are going from "+this.origin+" to "+this.destination)
  }

  radiusmoved(km: number){
      this.radius = km;
  }
  
  routepicked(picked)
  {
      if (this.pickedroute != null) {
          this.pickedroute = null;
         // this.pickedroute = picked.target.value;
            for (let index = 0; index < this.results.length; index++) {
            if(this.results[index].routeId === picked.target.value){
                this.pickedroute = this.results[index];
                console.log("new value "+JSON.stringify(this.pickedroute.routeId));
                } 
            } 
      }
      else{
          //array.forEach
          for (let index = 0; index < this.results.length; index++) {
          if(this.results[index].routeId === picked.target.value){
              this.pickedroute = this.results[index];
              console.log("first value "+JSON.stringify(this.pickedroute.routeId));
            } 
        }
      }
      
  }

  navigatethrough(){
      this.shareddata.setdata(this.pickedroute);
      this.router.navigateByUrl("staff/more-routes");
  }


}
