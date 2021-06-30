import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  API_KEY: string;
  url: string = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(private httpclient: HttpClient) { }

  //   https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
  // +Mountain+View,+CA&key=YOUR_API_KEY

  async geocode(address: string) : Promise<any>{
    this.API_KEY ='AIzaSyCHzzoDlmzdkCUST5doU4GIFVJMXbyEG0U'
    const myObject: any = { address: address, key: this.API_KEY };
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    const options = { params: new HttpParams(httpParams)};
    try {
      return await this.httpclient.get(this.url, options).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }
}
