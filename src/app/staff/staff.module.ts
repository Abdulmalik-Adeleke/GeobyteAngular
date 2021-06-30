import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GoogleMapsModule } from '@angular/google-maps';

import { StaffRoutingModule } from './staff-routing.module';
import { NavigateroutesComponent } from './navigateroutes/navigateroutes.component';
import { AddmoreordersComponent } from './addmoreorders/addmoreorders.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    NavigateroutesComponent,
    AddmoreordersComponent,
    OrdersComponent
  ],
  imports: [
    StaffRoutingModule,
    CommonModule, 
    GoogleMapsModule,
    MatProgressSpinnerModule
  ]
})
export class StaffModule { }
