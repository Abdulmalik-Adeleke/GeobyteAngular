import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User, Role } from "../../models/user";

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.css']
})
export class HubsComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  registerHub: FormGroup;
  isfeealert: boolean;
  feedisplay: string;

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

  registerhub() {
    let hubfee;
    if (this.registerHub.valid) {
      hubfee = this.fee.value

      if (!isNaN(parseInt(hubfee))) {
        console.log("i am here and hub fee is " +  parseInt(hubfee))
        if ( parseInt(hubfee) <= 24 ||  parseInt(hubfee) > 100) {
          this.isfeealert = true;
          this.feedisplay = "Hub fee must be between $25 - $100";
        } else {
          this.isfeealert = false;
          let hubaddress = this.address.value;
          hubaddress = encodeURIComponent(hubaddress);
          // call to geocode encoded address field value
          console.log(this.registerHub.value);
          console.log("uri encoded address " + hubaddress)
        }
      }
      else {
        this.isfeealert = true;
        this.feedisplay = "Fee must be in numerical format without any foreign values";
      }

    }

  }
}
