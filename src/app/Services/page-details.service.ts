import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPage } from '../viewmodels/IPage';

@Injectable({
  providedIn: 'root'
})
export class PageDetailsService {

  constructor(private http: HttpClient) {
  }

  getPageDetails(pageName: string) :Observable<IPage[]> {
    return this.http.get<IPage[]>(`${environment.API_URL}/Pages?name=${pageName}`);
  }
  getPageDetailsById(id: number) :Observable<IPage> {
    return this.http.get<IPage>(`${environment.API_URL}/Pages/${id}`);
  }
}
