import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:8080/auth/";
  API_KEY: string;
  constructor(private httpclient: HttpClient) {

  }

  async login(payload: any): Promise<any> {
    let path = this.url + 'login';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ');

    try {
      return await this.httpclient.post(path, payload, { headers: headers }).toPromise();
    }
    catch (error) {
      console.log(error);
    }
  }

  async verifytoken(email: string, token: string): Promise<any> {
    let path = this.url + 'verifytoken';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ');

    const myObject: any = { email: email , token: token };
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    const options = { params: new HttpParams(httpParams), headers: headers };

    try {
      await this.httpclient.get(path, options).toPromise();
      return true;
    }
    catch (error) {
      console.log(error);
    }
  }

  async resetpassword(payload: any): Promise<any> {
    let path = this.url + 'resetpassword';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ');

    try {
      await this.httpclient.put(path, payload, { headers: headers }).toPromise();
      return true;
    }
    catch (error) {
      console.log('im here')
      return error.error.status;
    }
  }
}
