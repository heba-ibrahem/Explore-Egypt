import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient) { }
  updateWeeksFav(id:number,list:any) {
    return this.http.put(`${environment.API_URL}/weekevents/${id}`, list)
        .subscribe((res => {
            return res;
        }));
  }
  addWishList(list:any) {
    return this.http.post(`${environment.API_URL}/wishlist`,list)
        .subscribe((res => {
            return res;
        }));
  }
  removeWishList(id:number) {
    return this.http.delete(`${environment.API_URL}/wishlist?ArID=${id}`)
    .subscribe(() => 'Delete successful');

  } 
  getAllWishList() {
    return this.http.get<any>(`${environment.API_URL}/wishlist`);
  }
  
  ShowWishList(article:string,id:number){
    return this.http.get<any>(`${environment.API_URL}/${article}/${id}`);
  }
}

