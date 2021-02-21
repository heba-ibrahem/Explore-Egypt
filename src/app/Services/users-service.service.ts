import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../viewmodels/iusers';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private userSubject: BehaviorSubject<IUsers>;
  public user:IUsers;
  public localstorage:string|null=null;
  constructor(private httpclient: HttpClient) { 
    // get data of current user
    this.userSubject = new BehaviorSubject<IUsers>(JSON.parse(localStorage.getItem('user')|| '{}'));
    this.user = this.userSubject.asObservable;
  }

  public get userValue(): IUsers {
    return this.userSubject.value;
}

login(email:string, password:string) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.httpclient.get<IUsers[]>(`${environment.API_URL}/Users/?email=${email}&&password=${password}`)
      .subscribe(((res) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(res[0]));
          console.log(res[0])
          this.userSubject.next(res[0]);
         
          return res;
      }));
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('user');
  this.userSubject.next({});
}

getAll() {
  return this.httpclient.get<IUsers[]>(`${environment.API_URL}/Users`);
}

getById(id: number) {
  return this.httpclient.get<IUsers>(`${environment.API_URL}/Users/${id}`);
}
update(id:number, user:IUsers) {
  const newuser = {firstName:user.firstName,
  lastName: user.lastName,
  city: user.city,
  email:user.email,
  password: user.password,
  confirmPassword:user.password}
  return this.httpclient.put(`${environment.API_URL}/Users/${id}`, newuser)
      .subscribe((res => {
              // update local storage
              localStorage.setItem('user', JSON.stringify(res));
              // publish updated user to subscribers
              this.userSubject.next(res);
          return res;
      }));
}
isLogged(): boolean{
  if(localStorage.getItem('user')){
    return true;
  }else{
    return false;
  }

}

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

  // getUserDetails(): Observable<IUsers[]> {
  //   const httpOptions = {
      
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //       //,'Accept':' */*'
  //       //,'Authorization': 'my-auth-token'
  //     })
  //   };
  //   console.log("getuser")
  //   return this.httpclient.get<IUsers[]>(`${environment.API_URL}/Users`,httpOptions);

  // }

 
  
 
}
