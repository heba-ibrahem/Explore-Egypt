import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curators } from '../viewmodels/curators';

@Injectable({
  providedIn: 'root'
})
export class CuratorsService {

  constructor(private http: HttpClient) { }
  getAll(): Observable <Curators[]>
  {
    return this.http.get<Curators[]>(`${environment.API_URL}/curators`);
  }
}


