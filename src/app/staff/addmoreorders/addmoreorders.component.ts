import { Component, OnInit, ViewChild } from '@angular/core';
import { visitslocation, locationobj, Routificsrequest, vehicleroute, vehiclelocation } from 'src/app/models/routificsrequest';
import { ShareddataService } from '../shareddata.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Mapmapper, Markermapper } from 'src/app/models/mapmapper';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { StaffService } from 'src/app/ApiRequest/Geobyte/staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Deletemarked, Log } from 'src/app/models/hub';

@Component({
    selector: 'app-addmoreorders',
    templateUrl: './addmoreorders.component.html',
    styleUrls: ['./addmoreorders.component.css']
})

export class AddmoreordersComponent implements OnInit {
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

    apiLoaded: Observable<boolean>;
    routeid: any;
    idsToIgnore = [];
    showheader: boolean;
    radius: any = "default";
    payload: Log;
    array = [
        // {
        //     "id": 6,
        //     "userName": "user6",
        //     "latitude": 7.3888316,
        //     "longitude": 3.8079502,
        //     "orderAddress": "Ibadan Airport",
        //     "distanceFromOrigin": 111,
        //     "fee": 141,
        //     "hubsVisitedPlusDestination": [
        //         {
        //             "latitude": 11.83371,
        //             "longitude": 13.17719,
        //             "hubFee": 30
        //         }
        //     ]
        // },
        // {
        //     "id": 7,
        //     "userName": "user7",
        //     "latitude": 7.4432279,
        //     "longitude": 3.900116,
        //     "orderAddress": "University Of Ibadan",
        //     "distanceFromOrigin": 121,
        //     "fee": 151,
        //     "hubsVisitedPlusDestination": [
        //         {
        //             "latitude": 11.83371,
        //             "longitude": 13.17719,
        //             "hubFee": 30
        //         }
        //     ]
        // },
        // {
        //     "id": 33,
        //     "userName": "user33",
        //     "latitude": 6.4225471,
        //     "longitude": 3.5233798,
        //     "orderAddress": "Alpha Beach",
        //     "distanceFromOrigin": 21,
        //     "fee": 51,
        //     "hubsVisitedPlusDestination": [
        //         {
        //             "latitude": 11.83371,
        //             "longitude": 13.17719,
        //             "hubFee": 30
        //         }
        //     ]
        // },
        // {
        //     "id": 17,
        //     "userName": "user18",
        //     "latitude": 13.070884,
        //     "longitude": 5.42079,
        //     "orderAddress": "Tunga Mallamawa",
        //     "distanceFromOrigin": 765,
        //     "fee": 911,
        //     "hubsVisitedPlusDestination": [
        //         {
        //             "latitude": 8.4992341,
        //             "longitude": 4.551918,
        //             "hubFee": 44
        //         },
        //         {
        //             "latitude": 13.0554932,
        //             "longitude": 5.2403176,
        //             "hubFee": 72
        //         },
        //         {
        //             "latitude": 11.83371,
        //             "longitude": 13.17719,
        //             "hubFee": 30
        //         }
        //     ]
        // }
    ];
    markfordelete = [];
    deletemarked:Deletemarked;

    constructor(private shareddata: ShareddataService, private httpclient: HttpClient, private staff: StaffService, private activatedroute: ActivatedRoute, private router: Router) {
        this.apiLoaded = httpclient.jsonp('https://maps.googleapis.com/maps/api/js?key=GOOGLE-API-KEY', 'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false)),
            );
    }
    ngOnInit(): void {
        this.route = this.shareddata.data;
        if (this.route.data === null){
            this.router.navigateByUrl("/staff/navigateroutes");
        }
        this.routeid = this.activatedroute.snapshot.queryParams['routeId']
        this.idsToIgnore = this.activatedroute.snapshot.queryParams['idsToIgnore']
        console.log('i log here')
        console.log(this.routeid);
        console.log(this.idsToIgnore);
    }

    radiusmoved(km: number) {
        this.radius = km;
    }

    async fetchmoreorders() {
        if(this.radius == "default"){
            this.radius = 40;
        }
        this.array = await this.staff.getAdditionalOrders(this.routeid, this.idsToIgnore, this.radius);
        this.showheader= true;
    }

    orderpicked(order: { target: { checked: any; value: any; }; }) {
        let index = order.target.value;
        let data = this.array[index];
        if (order.target.checked) {
            let order_amount = this.array[index].fee;
            var order_distance_from_origin = data.distanceFromOrigin;
            let i = 0;
            for (const hub of this.route.data) {
                order_distance_from_origin = order_distance_from_origin + hub.hubFee;
                if (order_distance_from_origin === order_amount) {
                    this.route.data[i].deliveryAddresses.push(data);
                }
                i++;
            }
        }
        else {
            let iterator_hub = 0;
            for (const hub of this.route.data) {
                let iterator_order = 0;
                for (const order of hub.deliveryAddresses) {
                    if (data === order) {
                        this.route.data[iterator_hub].deliveryAddresses.splice(iterator_order, 1);
                    }
                    iterator_order++;
                }
                iterator_hub++;
            }
        }
    }


    deets: any = this.shareddata.data;
    latitude: number = this.deets.data[0].latitude;
    longitude: number = this.deets.data[0].longitude;;

    // this.deets = this.shareddata;

    options: google.maps.MapOptions = {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 5
    };

    point: google.maps.LatLngLiteral;
    marker: Markermapper;
    markerPositions: Markermapper[] = [];
    markerOptions: google.maps.MarkerOptions = { draggable: false };

    mapper: Mapmapper;
    mapdata: Mapmapper[] = [];
    maparray: Mapmapper[] = [];

    routingarray: visitslocation[] = [];
    locationobject: visitslocation;
    vehicleobject: vehiclelocation;
    vehicleobject2: vehiclelocation;

    spinnershow: boolean;

    start_and_end_location: vehiclelocation[] = [];
    vehicle_route_object: vehicleroute;
    origin_destination_object: vehiclelocation;

    visits_object: locationobj;
    routificresponse: any;
    route: any = null;
    visits_map: Map<string, object> = new Map<string, object>();
    vehicle: Map<string, vehicleroute> = new Map<string, vehicleroute>();

    strict_destination: boolean = false;

    routific_req: Routificsrequest;


    strictdestination(strictdestination: { target: { checked: any; value: any; }; }): any {
        if (strictdestination.target.checked) {
            return this.strict_destination = true;
        }
        else {
            return this.strict_destination = false;
        }

    }

    async vrp() {
        this.spinnershow = true;

        let i = 0;

        for (const hub of this.route.data) {
            if (i == 0 && this.strict_destination == true || i == this.route.data.length - 1 && this.strict_destination == true) {
                this.start_and_end_location.push(this.origin_destination_object = {
                    id: hub.hubAddress,
                    lat: hub.latitude,
                    lng: hub.longitude
                });
            }
            else if (this.strict_destination == false && i == 0) {
                this.start_and_end_location.push(this.origin_destination_object = {
                    id: hub.hubAddress,
                    lat: hub.latitude,
                    lng: hub.longitude
                });
            }
            else {
                this.routingarray.push(this.locationobject = {
                    lat: hub.latitude,
                    lng: hub.longitude,
                    name: hub.hubAddress
                });
            }
            i++;

            for (const order of hub.deliveryAddresses) {
                this.routingarray.push(this.locationobject = {
                    lat: order.latitude,
                    lng: order.longitude,
                    name: order.orderAddress
                });
            }
        }

        let j = 0;
        for (const iterator of this.routingarray) {
            this.visits_object = {
                location: iterator
            }
            this.visits_map.set("order_" + j, this.visits_object);
            j++;
        }
        if (this.start_and_end_location.length > 1) {
            this.vehicleobject = {
                lat: this.start_and_end_location[0].lat,
                lng: this.start_and_end_location[0].lng,
                id: this.start_and_end_location[0].id
            }
            this.vehicleobject2 = {
                lat: this.start_and_end_location[1].lat,
                lng: this.start_and_end_location[1].lng,
                id: this.start_and_end_location[1].id
            }
            this.vehicle_route_object = {
                start_location: this.vehicleobject,
                end_location: this.vehicleobject2
            }
        }
        else {
            this.vehicleobject = {
                lat: this.start_and_end_location[0].lat,
                lng: this.start_and_end_location[0].lng,
                id: this.start_and_end_location[0].id
            }
            this.vehicle_route_object = {
                start_location: this.vehicleobject
            }
        }
        this.vehicle.set("vehicle_1", this.vehicle_route_object);

        let converted_fleet = {};
        let converted_visit = {};
        this.visits_map.forEach((value, key) => {
            converted_visit[key] = value;
        });
        this.vehicle.forEach((value, key) => {
            converted_fleet[key] = value;
        });
        this.routific_req = {
            visits: converted_visit,
            fleet: converted_fleet
        }

        // save log(this.route) to db  
        // this.shareddata.data = this.route.data
        // -- TODO: create api method to save log to db && set delete-marker = true
        const url = "https://api.routific.com/v1/vrp";
        let headers = new HttpHeaders();
        let routific_key = "ROUTIFIC-API-KEY";
        headers = headers.set('Authorization', 'Bearer ' + routific_key);
        try {
            const data = await this.httpclient.post(url, this.routific_req, { headers: headers }).toPromise();
            this.routificresponse = data;
        }
        catch (error) {
            console.log(error);
        }

        for (const hub of this.route.data) {

            this.maparray.push(this.mapper = {
                name: hub.hubAddress,
                lat: hub.latitude,
                lng: hub.longitude,
                isdelivery: false
            });
            for (const delivery of hub.deliveryAddresses) {

                this.maparray.push(this.mapper = {
                    name: delivery.orderAddress,
                    lat: delivery.latitude,
                    lng: delivery.longitude,
                    isdelivery: true
                });
            }


        }

        // validate and map routific response
        // use Google routing api and/or markers on plain javascript map 
        
        for (const point of this.routificresponse.solution.vehicle_1) {

            let placename = point.location_name;

            for (const address of this.maparray) {

                if (placename === address.name) {

                    this.mapdata.push(this.mapper = {
                        name: address.name,
                        lat: address.lat,
                        lng: address.lng,
                        isdelivery: address.isdelivery
                    });
                }
            }

        }

        this.spinnershow = false;

        this.mapdata.forEach(data => {

            this.markerPositions.push(this.marker = {
                name: data.name,
                location: this.point = {
                    lat: data.lat,
                    lng: data.lng
                },
                isdelivery: data.isdelivery
            });
        });

        let data = this.route.data;
        data.forEach(Hub => {
            Hub.deliveryAddresses.forEach(order => {
                this.markfordelete.push(order.id);
            });
        });
        // console.log('marked for delete '+this.markfordelete)
        // console.log('route '+ JSON.stringify(this.route))
        // console.log('MAP DATA '+ JSON.stringify(this.mapdata))
       
        await this.staff.logChosenRoute( this.payload = {
            log: JSON.stringify(this.route)
        });
        await this.staff.markordersfordelete(this.deletemarked = {
            ids: this.markfordelete
        });


    }

    openInfoWindow(marker: MapMarker) {
        console.log(marker);
        this.infoWindow.open(marker);
    }

}
