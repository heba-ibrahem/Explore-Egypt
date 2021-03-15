import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { Icity } from 'src/app/viewmodels/icity';
import { IUsers } from 'src/app/viewmodels/iusers';




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
  emailhasfound:boolean=false;
  // notMatchPassword:boolean= false;
  constructor(private fb: FormBuilder, private UserSevives: UsersServiceService, private city: CityService,private router: Router) {
    this.RegisterForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    },{validator: this.checkPasswords}
    );
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
      this.CityList= response;
    },
      (err) =>{console.log(err)} 
    
    )
   
  }

  register(){
    this.UserSevives.getAll().subscribe(
      (res)=>{
        const isUserExists = res.some(({ email }) => email === this.RegisterForm.value.email);
       if(isUserExists == false){
        this.UserSevives.addUser(this.RegisterForm.value).subscribe(
          (res) => {
            console.log(res);
            this.RegisterForm.reset();
            this.registerd= true;
            this.router.navigateByUrl('/login');
          },
          (err) => { console.log(err) }
        );
       }else{
         this.emailhasfound= true;
       }
      }
    )
 
  }
  checkPasswords(group: FormGroup) { 
  let pass = group.get("password")?.value;
  let confirmPass = group.get('confirmPassword')?.value;
  return pass === confirmPass ? null :{ notMatchPassword : true };
}

}
