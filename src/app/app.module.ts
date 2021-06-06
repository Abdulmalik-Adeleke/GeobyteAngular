import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";

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
    StaffnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:(request) => {
          if(request?.url.includes("localhost:8080")) 
            return localStorage.getItem("access-token");
          return "MY-ROTIFIC-API-KEY";
        },
        allowedDomains: ["localhost:8080","https://api.routific.com/v1/vrp"],
        authScheme: "Bearer "
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
