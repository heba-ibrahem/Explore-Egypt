import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticle } from '../viewmodels/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  // Get articles by page
  getArticlesByPage(page: string) :Observable<IArticle[]> {
    return this.http.get<IArticle[]>(`${environment.API_URL}/Articles?page=${page}`);
  }

  // Get articles by page and name
  getArticlesByPageAndName(page: string, name: string) :Observable<IArticle[]> {
    return this.http.get<IArticle[]>(`${environment.API_URL}/Articles?page=${page}&name=${name}`);
  }

  // Add article
  addArticle(article: IArticle) :Observable<any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.post<any>(`${environment.API_URL}/Articles`, article, httpOptions);
  }

}
