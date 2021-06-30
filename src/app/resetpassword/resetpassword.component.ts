import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../ApiRequest/Geobyte/auth.service";
import { Passwordreset } from '../models/passwordreset';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  activateAccount: FormGroup;
  email: string;
  token: string;
  message: string;
  passwordreset: Passwordreset;
  ispasswordalert: boolean;
  passworddisplay: string;
  constructor(private formbuilder: FormBuilder, private auth: AuthService, private activatedroute: ActivatedRoute, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.activateAccount = this.formbuilder.group({
      password: ['', [Validators.required]],
      passwordcompare: ['', [Validators.required]]
    });
    this.email = this.activatedroute.snapshot.queryParams['email']
    this.token = this.activatedroute.snapshot.queryParams['token']
    console.log(this.email)
    console.log(this.token)
    const isallowed = await this.auth.verifytoken(this.email, this.token);
    if (!isallowed) {
      this.message = "ACCESS DENIED";
      alert(this.message);
      this.router.navigateByUrl('/login');
    }
  }

  get password() {
    return this.activateAccount.get('password')
  }

  get passwordcompare() {
    return this.activateAccount.get('passwordcompare')
  }

  async resetpassword() {
    if (this.activateAccount.valid) {
      if (this.activateAccount.get('password').value == this.activateAccount.get('passwordcompare').value) {
        let isreset = await this.auth.resetpassword(this.passwordreset = {
          email: this.email,
          password: this.activateAccount.get('password').value,
          token: this.token
        });
        // if (isreset) {
        //   this.message = "ACCOUNT ACTIVATED";
        //   alert(this.message);
        //   this.router.navigateByUrl('/login');
        // }
        if (isreset == 500) {
          // https://stackoverflow.com/questions/64053846/spring-boot-jpa-mysql-getting-500-error-internal-server-while-retrieving-and
          this.message = "ACCOUNT ACTIVATED";
          alert(this.message);
          this.router.navigateByUrl('/login');
        }
      }
      else {
        this.ispasswordalert = true;
        this.passworddisplay = "Passwords Do Not Match!";
      }

    }
  }

}
