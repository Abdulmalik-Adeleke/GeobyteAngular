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
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminnavComponent,
    StaffnavComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          console.log("hi im here")
          //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMyNWFlYzZiNDBkZDAwMTdhMWQ5MDAiLCJpYXQiOjE2MjMzNDk5OTZ9.aiIyaszBsiyepRfGufzjZXmy85gKstshlu3qDwJ0evg";
          return localStorage.getItem('key');
        },
        authScheme: "Bearer ",
        allowedDomains: ['http://localhost:8080']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
