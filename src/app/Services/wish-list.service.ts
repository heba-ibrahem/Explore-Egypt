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
  removeWishList(user_id:number,ArID:number,AricalTitle:String) {
     return this.http.get<any>(`${environment.API_URL}/wishlist?uID=${user_id}&&ArID=${ArID}&&AricalTitle=${AricalTitle}`)
     .subscribe((data)=>{
       console.log(data[0])
       console.log(data[0].id)
     this.http.delete(`${environment.API_URL}/wishlist/${data[0].id}`).
     subscribe(()=>{
       console.log("remove");
     })
     })
    // return this.http.delete(`${environment.API_URL}/wishlist/${id}`)
    // .subscribe(() => 'Delete successful');
    // return this.http.delete(`${environment.API_URL}/wishlist?uID=${user_id}&&ArID=${ArID}`);

  } 
  getAllWishList() {
    return this.http.get<any>(`${environment.API_URL}/wishlist`);
  }
  
  ShowWishList(article:string,id:number){
    return this.http.get<any>(`${environment.API_URL}/${article}/${id}`);
  }
}

