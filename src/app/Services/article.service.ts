import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../viewmodels/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  getAll(): Observable <Article[]> {
  {
    return this.http.get<Article[]>(`${environment.API_URL}/articles`);
  }}}

