import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from 'src/app/ApiRequest/Geobyte/admin.service';
import { GoogleService } from 'src/app/ApiRequest/google.service';
import { Hub } from 'src/app/models/hub';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.css']
})
export class HubsComponent implements OnInit {


  constructor(private formbuilder: FormBuilder, private admin: AdminService, private google: GoogleService) { }
  registerHub: FormGroup;
  isfeealert: boolean;
  feedisplay: string;
  hub: Hub;
  latitude: number;
  longitude: number;
  issuccess: boolean;
  success: string;
  registered: boolean;
  geocoded: any;

  ngOnInit(): void {
    this.registerHub = this.formbuilder.group({
      city: ['', [Validators.required]],
      fee: ['', [Validators.required]],
      address: ['', [Validators.required]],
    })
  }

  get city() {
    return this.registerHub.get('city')
  }

  get fee() {
    return this.registerHub.get('fee')
  }

  get address() {
    return this.registerHub.get('address')
  }

  async registerhub() {
    let hubfee;
    if (this.registerHub.valid) {
      hubfee = this.fee.value

      if (!isNaN(parseInt(hubfee))) {
        console.log("i am here and hub fee is " + parseInt(hubfee))
        if (parseInt(hubfee) <= 24 || parseInt(hubfee) > 100) {
          this.isfeealert = true;
          this.feedisplay = "Hub fee must be between $25 - $100";
        } else {
          this.isfeealert = false;
          let hubaddress = this.address.value;

          try {
            this.geocoded = await this.google.geocode(hubaddress);
            let results = this.geocoded.results;
            console.log(JSON.stringify(results[0].geometry.location.lat))

            let sent: boolean = await this.admin.registerHub(this.hub = {
              City: this.city.value,
              Address: this.address.value,
              Latitude: results[0].geometry.location.lat,
              Longitude: results[0].geometry.location.lng,
              Fee: parseInt(this.fee.value)
            });
            if (sent) {
              this.registered = true;
            }
          } catch (error) {

            console.log(JSON.stringify(error))

            this.issuccess = true;
            this.success = "Something Broke"
          }

          if (this.registered) {
            this.issuccess = true;
            this.success = "Hub Address geocoded and logged successfully"
          }
          //console.log(this.registerHub.value);
        }
      }
      else {
        this.isfeealert = true;
        this.feedisplay = "Fee must be in numerical format without any foreign values";
      }
    }
  }


}
