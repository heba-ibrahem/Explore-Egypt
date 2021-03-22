import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { abort } from 'process';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/Services/city.service';
import { HomeService } from 'src/app/Services/home.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { IProgram } from 'src/app/ViewModels/iprogram';
import { IUsers } from 'src/app/ViewModels/iusers';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  CurrentUser: IUsers={};
  user_id :number =0;
  wishlist:any[]=[];
  Myprograms:IProgram[]=[];
  DoneProgram:IProgram[]=[];
  daysoftrip:number=0
  ShowMyTrip:boolean=false;
  ActiveTrip:boolean=false;
  DoneTrip:boolean=false;
  currentUserSubscription: Subscription|null = null;
  constructor(private userService: UsersServiceService,
     private homeservice:HomeService
     ,private router:Router
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
      this.homeservice.getAllProgramsOfCurrentser(this.user_id)
      .subscribe(
        (response)=>{
          this.Myprograms = response;
          console.log(this.Myprograms);
          if(response.length > 0){
            this.ShowMyTrip = true;
          }
          // this.Myprograms = response.filter((item:any) => this.Diff(item.to) < 0);
          // if(this.Myprograms.length > 0){
          //   this.ActiveTrip = true;
          // }
          console.log(this.Myprograms);
          this.DoneProgram = response.filter((item:any) => this.Diff(item.to) >= 0);
          if(this.DoneProgram.length > 0){
            this.DoneTrip = true;
          }
          console.log(this.DoneProgram);
        
          })

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
  calculateDiffDate(fromDate:any,toDate: any) {
     fromDate = new Date(fromDate);
     toDate = new Date(toDate);
    const diff = Math.floor((Date.UTC(toDate.getFullYear(), toDate.getMonth(), toDate.getDate()) - Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate())) / (1000 * 60 * 60 * 24));
    return diff;
  }
  GoToDetials(id:any){
    this.router.navigate(['/programDetails',id]);
  }
  Diff(date:Date){
   const nowdate = new Date();
   const todate = new Date(date);
   const diff = Math.floor((Date.UTC(todate.getFullYear(), todate.getMonth(), todate.getDate()) - Date.UTC(nowdate.getFullYear(), nowdate.getMonth(), nowdate.getDate())) / (1000 * 60 * 60 * 24));
    return diff;
  }
}
