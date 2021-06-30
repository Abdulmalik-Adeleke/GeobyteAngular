import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private jwthelper: JwtHelperService) { }

  public authorize(iamrole: string): boolean {
    let jwt = localStorage.getItem('key');
    console.log('jtw = '+jwt)
    let iam = this.jwthelper.decodeToken(jwt);
    let scope: any = iam.scope;
    if (!this.jwthelper.isTokenExpired(jwt) && scope.name == iamrole) {
      return true;
    }
    else {
      return false;
    }
  }
  // public navigatelogin(token: string): string {
  //   let iam = this.jwthelper.decodeToken(token);
  //   return iam.scope;
  // }
}
