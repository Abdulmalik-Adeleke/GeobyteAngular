import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../ApiRequest/Geobyte/auth.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  SignIn: FormGroup;
  payload: Login;
  data: any;
  displayerror: string;
  display: boolean;
  constructor(private formbuilder: FormBuilder, private auth: AuthService, private jwt: JwtHelperService, private router: Router) { 
  }

  ngOnInit(): void {
    this.SignIn = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.SignIn.get('email')
  }

  get password() {
    return this.SignIn.get('password')
  }

  async signin() {
    if (this.SignIn.valid) {
      this.data = await this.auth.login(this.payload = {
        email: this.SignIn.get('email').value,
        password: this.SignIn.get('password').value
      });
      localStorage.setItem('key',this.data.token);
      let iam = this.jwt.decodeToken(this.data.token);
      if(iam.scope.name == "ROLE_STAFF"){
        this.router.navigateByUrl('/staff/navigateroutes');
      }
      else if (iam.scope.name == "ROLE_ADMIN"){
        this.router.navigateByUrl('/admin/hub');
      }
      else{
        this.display = true;
        this.displayerror = "Username or Password Incorrect"
      }
    }
  }
}
