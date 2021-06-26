import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { HubsComponent } from './hubs/hubs.component';
import { DestinationsComponent } from './destinations/destinations.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    HubsComponent,
    DestinationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
