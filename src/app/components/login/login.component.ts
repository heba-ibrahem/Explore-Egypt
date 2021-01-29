import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';


import { IUsers } from 'src/app/viewmodels/iusers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  user: IUsers;
  
  constructor(private fb: FormBuilder,private authService: AuthService ) { 
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.user = {
      email: "",
      password: "",
    }
  }

  ngOnInit(): void {
  }

   login() {
    console.log(this.LoginForm.value)
  //   const val= this.LoginForm.value
  //   if (val.email && val.password) {
  //     this.authService.login(val.email, val.password)
  //         .subscribe(
  //             () => {
  //                 console.log("User is logged in");
  //                 // this.router.navigateByUrl('/');
  //             }
  //         );
          
  // }
   }
  

}
