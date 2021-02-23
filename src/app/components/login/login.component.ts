import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { map } from 'rxjs/operators';
import { IUsers } from 'src/app/viewmodels/iusers';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  token: Guid | any;
  CurrentUser: IUsers = {};
  user_id: number = 0;
  islogged: boolean = false;
  currentUserSubscription: Subscription | null = null;
  constructor(private router: Router, private fb: FormBuilder, private userService: UsersServiceService) {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    // this.user = this.userService.userValue;
    // console.log(this.user);
    // this.user_id = this.userService.getUserID();
  }

  ngOnInit(): void {
  }
  async LoadAccounte() {
    this.currentUserSubscription = (await this.userService.getUserById(this.user_id))
      .subscribe(user => {
        this.CurrentUser = user;
      });
  }
  async login() {
    await (await (this.userService.login(this.LoginForm.value.email, this.LoginForm.value.password)));
    if (localStorage.getItem('user')) {
      this.islogged = false;
      this.user_id = this.userService.getUserID();
      this.router.navigateByUrl('/home');
      this.LoadAccounte();
    } else {
      this.user_id = 0;
      this.islogged = true;
      this.router.navigateByUrl('/login');
    }
    console.log(this.user_id)


  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }


}
