import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { itinerariesCity } from '../ViewModels/itinerariesCitiy';
@Injectable({
  providedIn: 'root'
})
export class ItinerariesCitiesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable <itinerariesCity[]>
  {
    return this.http.get<itinerariesCity[]>(`${environment.API_URL}/itinerariesCities`);
  }
}
