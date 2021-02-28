import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { IUsers } from 'src/app/viewmodels/iusers';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  CurrentUser: IUsers={};
  user_id :number =0;
  wishlist:any[]=[];
  programs:any[]=[];
  currentUserSubscription: Subscription|null = null;
  constructor(private userService: UsersServiceService,
     private homeservice:HomeService
     ,private wishlistservice:WishListService) {
    if(localStorage.getItem('user')){
      this.user_id = this.userService.getUserID();
       this.MyAccount()
      console.log("first")
    }
    else{
      this.CurrentUser = {};
    }
      this.wishlistservice.getAllWishList().subscribe(
        (response)=>{
   response.filter((item:any) => item.uID === this.user_id)
          .map((item:any)=>{
         this.wishlistservice.ShowWishList(item.AricalTitle,item.ArID)
            .subscribe(response=>{
              this.wishlist.push(response);
            });
          })
          console.log(this.wishlist);
      });
      this.homeservice.getAllPrograms(this.user_id).subscribe(
        (response)=>{
          this.programs = response;
          console.log(response);
      });
   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }
async MyAccount(){
   this.currentUserSubscription =  (await (await (this.userService.getUserById(this.user_id)))
    .subscribe(user=>{
      this.CurrentUser = user;
      console.log("secound")
    })
   )
  }
  
}
