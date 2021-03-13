import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishlist:any[]=[]
  user_id :number =0;
  ShowWishList:boolean= false;
  constructor(private userService: UsersServiceService,
    private homeservice:HomeService
    ,private wishlistservice:WishListService) {
    if(localStorage.getItem('user')){
      this.user_id = this.userService.getUserID();
    }
    
    this.wishlistservice.getAllWishList().subscribe(
      (response)=>{
   response.filter((item:any) => item.uID === this.user_id)
        .map((item:any)=>{
       this.wishlistservice.ShowWishList(item.AricalTitle,item.ArID)
          .subscribe(response=>{
            this.wishlist.push(response);
            if(this.wishlist.length > 1){
              this.ShowWishList = true;
            }
          });
        })
        console.log(this.wishlist);
    });
   }
  ngOnInit(): void {
  }

}
