import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "http://localhost:8080/admin/";
  API_KEY: string;

  constructor(private httpclient: HttpClient) {

  }

  /***
   * Registration Component 
   * */
  async registerUser(body: any): Promise<any> {
    this.url = "http://localhost:8080/auth/";
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'register';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    try {
      return await this.httpclient.post(path, body, { headers: headers }).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  /***
   * Hubs Component 
   * */
  async registerHub(payload: any): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'hub/add';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    try {
       await this.httpclient.post(path, payload, { headers: headers }).toPromise();
       return true;
    }
    catch (error) {
      console.log(error);
    }
  }

  /***
   * Destinations Component 
   * */
  async getAllHubs(): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'hubs';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    try {
      return await this.httpclient.get(path, { headers: headers }).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  async registerRoutesAndDestinations(paylaod: any): Promise<any> {
    this.API_KEY = localStorage.getItem('key');
    let path = this.url + 'destination/add';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.API_KEY);

    try {
      return await this.httpclient.post(path, paylaod, { headers: headers }).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }
}
