import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../ViewModels/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private httpclient: HttpClient) { }
  addUser(user: IUsers) : Observable<any[]> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.httpclient.post<any>(`${environment.API_URL}/Users`,user, httpOptions);
  }

  // signIn(user: IUsers) {
  //   return this.httpclient.post<any>(`${environment.API_URL}/Users`, user)
  //     .subscribe((res: any) => {
  //       localStorage.setItem('access_token', res.token)
  //       this.getUserProfile(res._id).subscribe((res) => {
  //         this.currentUser = res;
  //         this.router.navigate(['user-profile/' + res.msg._id]);
  //       })
  //     })
  // }
}
