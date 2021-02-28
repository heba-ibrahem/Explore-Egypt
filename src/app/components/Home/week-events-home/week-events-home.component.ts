import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { INewEventsHome } from 'src/app/viewmodels/iweek-events-home';

@Component({
  selector: 'app-week-events-home',
  templateUrl: './week-events-home.component.html',
  styleUrls: ['./week-events-home.component.scss']
})
export class NewEventsHomeComponent implements OnInit {
   List:INewEventsHome[]=[]
   user_id:number=0;
   WeekEventList:INewEventsHome[]=[]
   subscribtion: Subscription|null=null;
  @Input() WeekEvents:INewEventsHome | undefined;
  @Input() addedtoWishList:boolean | undefined;
  constructor(private router:Router,private service:HomeService ,
     private userService: UsersServiceService
     ,private wishlistservice:WishListService) {
    if(localStorage.getItem('user')){
      this.user_id = this.userService.getUserID();}
    }

  ngOnInit(): void {
    this.subscribtion = this.service.getAllEvents().subscribe(
      (response)=>{
        this.List=response;
      },
      (err)=>{console.log(err)}
    ); 

    // this.service.getWeeksEvents().subscribe(
    //       (response)=>{
    //         this.WeekEvents = response.filter(this.calculateDiff).pop();
    //        console.log(this.WeekEvents)
    //       },
    //       (err)=>{console.log(err)}
    //     );  
  }
  // calculateDiff(item:any){
  //   let currentDate = new Date();
  //   item.date = new Date(item.date);
  //   const diff = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(item.date.getFullYear(),item.date.getMonth(), item.date.getDate()) ) /(1000 * 60 * 60 * 24));
  //   return diff <= 7 ;
  //  }
  //  toggleFavorite(list:any) {
  //   list.isFavorite = !list.isFavorite;
  //   this.update(list.id,list);
  // }
  // update(id:number,list:any){
  //   this.wishlistservice.updateWeeksFav(id,list);
  //   console.log("update");
  // }
  addwishlist(list:any){
    if(localStorage.getItem('user')){
      const list2={uID:this.user_id,ArID:list.id,AricalTitle:"weekevents"};
      this.wishlistservice.addWishList(list2);
      this.addedtoWishList=true;
      console.log("add");
    }else{
      this.router.navigateByUrl('/login');
    }
  }
  deletewishlist(list:any){
      if(localStorage.getItem('user')){
        this.wishlistservice.removeWishList(list.id);
      this.addedtoWishList=false;
      console.log("remove");
      }else{
        this.router.navigateByUrl('/login');
      }
    }
hasAccount(){
  return (localStorage.getItem('user'))
}
ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.subscribtion?.unsubscribe();
}
   

}
