import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { StaffnavComponent } from './staffnav/staffnav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminnavComponent,
    StaffnavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    // // JwtModule.forRoot({
    // //   config:{
    // //     tokenGetter:() => {
    // //         return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMyNWFlYzZiNDBkZDAwMTdhMWQ5MDAiLCJpYXQiOjE2MjMzNDk5OTZ9.aiIyaszBsiyepRfGufzjZXmy85gKstshlu3qDwJ0evg";
    // //     },
    // //     authScheme: "Bearer ",
    // //     allowedDomains: ['https://api.routific.com/v1/vrp']
    // //   }
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
