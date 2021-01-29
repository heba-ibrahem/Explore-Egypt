import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUsers } from '../viewmodels/iusers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // token;
  constructor(private httpclient: HttpClient,private router: Router) { }

  // getUserDetails(user: IUsers): Observable<any[]>{
  //   const httpOptions = {headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //     //,'Accept':' */*'
  //     //,'Authorization': 'my-auth-token'
  //       })};
      
  //       return this.httpclient.post<any>(`${environment.API_URL}/Users`,user, httpOptions);
  // }
  // login(email:string, password:string ) {
  //   return this.httpclient.post<any>(`${environment.API_URL}/Users`, {email, password})
  //       // this is just the HTTP call, 
  //       // we still need to handle the reception of the token
  //       .shareReplay();
}

