import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { Icity } from 'src/app/ViewModels/icity';
import { IUsers } from 'src/app/ViewModels/iusers';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  user: IUsers;
  CityList: Icity[]=[];
  registerd:boolean=false;

  constructor(private router: Router,private fb: FormBuilder, private UserSevives: UsersServiceService, private city: CityService) {
    this.RegisterForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.checkPasswords })
    this.user = {
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }
  getControl(){
    return this.RegisterForm.get("firstName");
  }

  ngOnInit(): void {
    this.city.getCity().subscribe(
      (response) =>{
        // console.log(this.CatagoryListApi)
      this.CityList= response;
      // console.log(this.CityList)
    },
      (err) =>{console.log(err)} 
    
    )
   
  }

  register(){
    console.log(this.RegisterForm.value)
    this.UserSevives.addUser(this.RegisterForm.value).subscribe(
      (res) => {
        console.log(res);
        this.RegisterForm.reset();
        this.registerd= true
        this.router.navigateByUrl('/login');
      },
      (err) => { console.log(err) }
    );
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const password = group.get('password');
  const confirmPassword = group.get('confirmPassword');
  return password === confirmPassword ? null : { notSame: true }     
}}




