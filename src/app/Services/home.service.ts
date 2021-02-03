import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INewEventsHome } from '../viewmodels/iweek-events-home';
import { IPage } from '../viewmodels/IPage';
import { Article } from '../viewmodels/article';
import { IactivitiesDep } from '../viewmodels/iactivities-dep';

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
  
  getAllArticles(): Observable <any>
  {
    return this.http.get<IactivitiesDep[]>(`${environment.API_URL}/explorDep`);
  }
}
