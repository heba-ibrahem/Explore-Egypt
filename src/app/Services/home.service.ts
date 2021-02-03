import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExpiorEgyptHome } from '../viewmodels/iexpior-egypt-home';
import { INewEventsHome } from '../viewmodels/iweek-events-home';
import { IPage } from '../viewmodels/IPage';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private messageSource = new BehaviorSubject('default message');
  fav = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }
   getAllpages(): Observable <any>
  {
    return this.http.get<IPage[]>(`${environment.API_URL}/Pages`);
  }
  getPageByName(pagename:string):Observable <IPage> 
  {
    return this.http.get<IPage>(`${environment.API_URL}/Pages?name/${pagename}`);
  }
  getAllEvents(): Observable <any>
  {
    return this.http.get<INewEventsHome[]>(`${environment.API_URL}/events`);
  }

}
