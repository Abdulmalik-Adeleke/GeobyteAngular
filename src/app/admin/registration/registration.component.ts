import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User, Role } from "../../models/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  registerUser: FormGroup;
  successful: boolean;
  person;
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

  register() {
    if (this.registerUser.valid) {
      //save to db
      this.successful = true;
      this.person = this.registerUser.get('name').value;
     
      //console.log(this.registerUser.value)
      this.registerUser.reset();
    }
  }

}



