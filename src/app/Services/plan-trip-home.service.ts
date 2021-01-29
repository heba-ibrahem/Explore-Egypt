import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanTripHome } from '../viewmodels/Iplan-trip-home';

@Injectable({
  providedIn: 'root'
})
export class PlanTripHomeService {
    PlanList:PlanTripHome[]
  constructor(private http: HttpClient) { 
    this.PlanList=[
      {img:"../assets/1.jpg",title:"Visa guide",description:"Essential information before you plan your trip to Egypt"},
      {img:"../assets/3.jpg",title:"Public transport",description:"Learn how to arrive in Dubai and the best ways to get around"},
      {img:"../assets/1.jpg",title:"Places to stay",description:"Explore an incredible range of accommodation options"},
      {img:"../assets/3.jpg",title:"About Egypt",description:"See how Dubai transformed into a sun-soaked modern metropolis"}
    ]
  }
  // getpagebanner(): Observable <any>
  // {
  //   return this.http.get<PlanTripHome[]>(`${environment.API_URL}/PageBanner`);
  // }
}
