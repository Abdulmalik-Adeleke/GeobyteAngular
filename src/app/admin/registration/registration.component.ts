import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from 'src/app/ApiRequest/Geobyte/admin.service';
import { Role, User } from "../../models/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private admin: AdminService) { }
  registerUser: FormGroup;
  successful: boolean;
  person;
  user: User;
  roles: Role[] = [new Role('STAFF', 'STAFF'), new Role('ADMIN', 'ADMIN')];


  ngOnInit(): void {
    this.registerUser = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      name: ['', [Validators.required]],
      role: [null, [Validators.required]]
    })
  }

  get name() {
    return this.registerUser.get('name')
  }

  get email() {
    return this.registerUser.get('email')
  }

  get role() {
    return this.registerUser.get('role')
  }

  async register() {
    if (this.registerUser.valid) {
      //save to db
      let registered: boolean = await this.admin.registerUser(this.user = {
        name: this.registerUser.get('name').value,
        email: this.registerUser.get('email').value,
        role: this.registerUser.get('role').value
      });

      if (registered) {
        this.successful = true;
        this.registerUser.reset();
      }
      this.registerUser.reset();

    }
  }

}



