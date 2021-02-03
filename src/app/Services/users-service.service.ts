import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../viewmodels/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private httpclient: HttpClient) { }

  addUser(user: IUsers): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient.post<any>(`${environment.API_URL}/Users`, user, httpOptions);
  }

  getUserDetails(): Observable<IUsers[]> {
    const httpOptions = {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };
    console.log("getuser")
    return this.httpclient.get<IUsers[]>(`${environment.API_URL}/Users`,httpOptions);

  }
  
 
}
