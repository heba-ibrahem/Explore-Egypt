import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INewEventsHome } from '../viewmodels/iweek-events-home';
import { IPage } from '../viewmodels/IPage';
import { Article } from '../viewmodels/article';
import { IactivitiesDep } from '../viewmodels/iactivities-dep';
import { IUsers } from '../viewmodels/iusers';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private messageSource = new BehaviorSubject('default message');
  fav = this.messageSource.asObservable();
  WeekEvents: IUsers[] = [];
  constructor(private http: HttpClient) {
  }

  getAllpages(): Observable<any> {
    return this.http.get<IPage[]>(`${environment.API_URL}/Pages`);
  }
  getPageByName(pagename: string): Observable<IPage> {
    return this.http.get<IPage>(`${environment.API_URL}/Pages?name/${pagename}`);
  }
  getAllEvents(): Observable<any> {
    return this.http.get<INewEventsHome[]>(`${environment.API_URL}/events`);
  }

  getAllArticles(): Observable<any> {
    return this.http.get<IactivitiesDep[]>(`${environment.API_URL}/explorDep`);
  }
  getAllPlaneYourTrip(): Observable<any> {
    return this.http.get<IactivitiesDep[]>(`${environment.API_URL}/PlanYourtrip`);
  }
  getAllProgramsOfCurrentser(id: number): Observable<any> {
    return this.http.get<IactivitiesDep[]>(`${environment.API_URL}/programs?userID=${id}`);
  }
  getWeeksEvents(): Observable<any> {
    return this.http.get<INewEventsHome[]>(`${environment.API_URL}/weekevents`);
  }

  async getweekEvents() {
    await this.getWeeksEvents().subscribe(
      (response) => {
        this.WeekEvents = response.filter(this.calculateDiff);
        console.log(this.WeekEvents)
        return this.WeekEvents
      },
      (err) => { console.log(err) }
    );

  }
  async currentWeek() {
    await this.getweekEvents();
    console.log(this.WeekEvents)
  }
  calculateDiff(item: any) {
    let currentDate = new Date();
    item.date = new Date(item.date);
    const diff = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(item.date.getFullYear(), item.date.getMonth(), item.date.getDate())) / (1000 * 60 * 60 * 24));
    return diff <= 7;
  }


}
