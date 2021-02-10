import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { map } from 'rxjs/operators';
import { IUsers } from 'src/app/viewmodels/iusers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  LoginForm: FormGroup;
  users: IUsers[] = [];
  // loggedUser: IUsers;
  token: Guid |any;
  user: IUsers;
  loge:boolean=false
  constructor(private fb: FormBuilder, private authService: AuthService, private userService: UsersServiceService) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.user = this.userService.userValue;
    console.log(this.user)
    // this.loggedUser = {
    //   email: "",
    //   password: "",
    // }
  }
   
  ngOnInit(): void {
    // this.userService.getUserDetails().subscribe(
    //   res => this.users = res,
    //   err => console.log(err),
      
    // ) 
    
  }

  login(): boolean {
    this.loading = true;
    this.userService.login(this.LoginForm.value.email,this.LoginForm.value.password);
    console.log(this.user)
    // console.log("enterede value",this.LoginForm.value)
    // // console.log("inside login")
    // ///for allow login user to access
    // //  this.authService.login('test Token')

    // let loggedUser = this.LoginForm.value
    // // console.log(this.loggedUser)
    // // console.log("inside login")
    let correct: boolean = false
    // this.users.forEach((userr) => {
    //   console.log("You are not Registered!!")
    //   // alert("You are not Registered!!")
    //   if (this.LoginForm.value.email === userr.email && this.LoginForm.value.password === userr.password) {
        
    //     this.LoginForm.reset();
    //     correct = true
    //     console.log("you are loggied in ")
    //     alert("you are logged in")
    //   }
      
    // })
    if (correct) {
      this.accessToken()
      return correct
    } else {
      return correct
    }
 

  }

  logout() {
    // console.log("looged out")
    // this.authService.logout()
    this.userService.logout()
    console.log("looged out")
  }
  accessToken() {
    this.token = Guid.create()
    console.log(this.token)
    localStorage.setItem("Access token", this.token.toString())
  }

}
