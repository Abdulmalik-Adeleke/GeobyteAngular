import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private jwthelper: JwtHelperService) { }

  public authorize (iamrole: string): boolean {
    let jwt = JSON.parse(localStorage.getItem('access-token') || '{}');
    let iam = this.jwthelper.decodeToken(jwt);
    let scope: string =  iam.scope;
    if (!this.jwthelper.isTokenExpired(jwt) && scope == iamrole)
      return true;
    else
     return false;
     
  }
}
