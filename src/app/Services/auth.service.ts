import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUsers } from '../viewmodels/iusers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // token;
  constructor(private httpclient: HttpClient,private router: Router) { }

  login(Token: string){
    localStorage.setItem('userToken', Token)
  }
  logout(){
    localStorage.removeItem('userToken');
  }
  isLogged(): boolean{
    if(localStorage.getItem('userToken')){
      return true;
    }else{
      return false;
    }

  }

  // accessToken() {
  //   this.token = Guid.create()
  //   console.log(this.token)
  //   localStorage.setItem("Access token", this.token.toString())
  // }
 
      
  //       return this.httpclient.post<any>(`${environment.API_URL}/Users`,user, httpOptions);
  // }
  // login(email:string, password:string ) {
  //   return this.httpclient.post<any>(`${environment.API_URL}/Users`, {email, password})
  //       // this is just the HTTP call, 
  //       // we still need to handle the reception of the token
  //       .shareReplay();
}

