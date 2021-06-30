import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  url = "http://localhost:8080/staff/";
  API_KEY: string;

  constructor(private httpclient: HttpClient) {

  }

  async getOrders(): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'orders';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    try {
      return await this.httpclient.get(path, { headers: headers }).toPromise();
    }
    catch (error) {
      console.log(error);
     // return false;
    }
  }

  async getStartHubs(): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'originlocations';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    try {
      return await this.httpclient.get(path, { headers: headers }).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  async getDestinationHubs(origin: string): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'endlocations';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    const myObject: any = { origin: origin };
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    const options = { params: new HttpParams(httpParams), headers: headers };
    try {
      return await this.httpclient.get(path,options).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  async getRoutes(origin: string, destination: string, radiusInKm: number): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'getroutes';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    const myObject: any = { origin: origin, destination: destination, radiusInKm: radiusInKm};
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    const options = { params: new HttpParams(httpParams), headers: headers };
    try {
      return await this.httpclient.get(path, options).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  async getAdditionalOrders(id: string, idsToIgnore:number[], radiusInKm: number): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'extralocations';

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    const myObject: any = { id: id, idsToIgnore: idsToIgnore, radiusInKm: radiusInKm};
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    const options = { params: new HttpParams(httpParams), headers: headers };
    try {
      return await this.httpclient.get(path, options).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  async logChosenRoute(body: any): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'logs';

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    const options = {headers: headers };
    try {
       await this.httpclient.post(path,body,options).toPromise();
       return true;
    }
    catch (error) {
      console.log(error);
    }
  }

  async markordersfordelete(payload: any): Promise<any> {
    let path = this.url + 'deleteorders';
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.API_KEY);

    try {
      await this.httpclient.put(path, payload, { headers: headers }).toPromise();
      return true;
    }
    catch (error) {

      return error.error.status;
    }
  }


}
