import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../viewmodels/iusers';


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  // private userSubject: BehaviorSubject<number>;
  public localstorage:string|null=null;
  constructor(private httpclient: HttpClient) { 

    // this.userSubject = new BehaviorSubject<number>(JSON.parse(localStorage.getItem('user')||''));
    // this.user = JSON.parse(this.userSubject.asObservable);
  }

  public getUserID():number {
   var decode = atob(JSON.parse(localStorage.getItem('user') || ''));
    return (parseInt(decode));
}

 login(email:string, password:string) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
 return this.httpclient.get<IUsers>(`${environment.API_URL}/Users/?email=${email}&&password=${password}`)
      .subscribe(((res) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // [{}]
          if(res[0]){
            var encode = btoa(res[0].id.toString());
            localStorage.setItem('user', JSON.stringify(encode));
            console.log(res.join())
            // this.userSubject.next(res[0].id);
            return res[0];
          }
        return null; 
         
      }));
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('user');
  // this.userSubject.next(0);
}

getAll() {
  return this.httpclient.get<IUsers[]>(`${environment.API_URL}/Users`);
}

async getUserById(id: number) {
  const res = await this.httpclient.get<IUsers>(`${environment.API_URL}/Users/${id}`);
  return await res
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
                var encode = btoa(id.toString());
               localStorage.setItem('user', JSON.stringify(encode));
              // localStorage.setItem('user', JSON.stringify(res));
              // publish updated user to subscribers
              // this.userSubject.next(res);
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
}

