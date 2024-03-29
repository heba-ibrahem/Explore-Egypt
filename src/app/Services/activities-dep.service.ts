import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {IactivitiesDep} from '../ViewModels/iactivities-dep';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesDepService {

  constructor(private http: HttpClient) { }
  getAll(): Observable <IactivitiesDep[]>
  {
    return this.http.get<IactivitiesDep[]>(`${environment.API_URL}/explorDep`);
  }
  getDepByID(ID: number): Observable <IactivitiesDep>{

    return this.http.get<IactivitiesDep>(`${environment.API_URL}/explorDep/${ID}`);
  }
}
