import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IUsers } from 'src/app/ViewModels/iusers';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  user: IUsers;
  constructor(private fb: FormBuilder, private UserSevives: UsersServiceService ) {
    this.RegisterForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      countery: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.user = {
      firstName: "",
      lastName: "",
      countery: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }
  getControl(){
    return this.RegisterForm.get("firstName");
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.RegisterForm.value)
    this.UserSevives.addUser(this.RegisterForm.value).subscribe(
      (res) => {
        console.log(res);
        
      },
      (err) => { console.log(err) }
    );
  }

}
