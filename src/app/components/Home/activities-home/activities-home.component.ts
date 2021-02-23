import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';

@Component({
  selector: 'app-activities-home',
  templateUrl: './activities-home.component.html',
  styleUrls: ['./activities-home.component.scss']
})
export class ActivitiesHomeComponent implements OnInit {
  // List:IactivitiesDep[]|null=null;
  @Input() List:IactivitiesDep |undefined;
  @Input() addedtoWishList:boolean | undefined;
  subscribtion: Subscription[]=[];
  CurrentUser_id:number=0;
  constructor(private router:Router,private homeservies:HomeService 
    ,private userService:UsersServiceService
    ,private wishlistservice: WishListService) { 
    if(localStorage.getItem('user')){
      this.CurrentUser_id = this.userService.getUserID();
    }
  }

  ngOnInit(): void {
    // this.subscribtion[0] = this.servies.getAllArticles().subscribe(
    //   (response)=>{
    //     this.List = response;
    //   },
    //   (err)=>{console.log(err)}
    // );
  }
  addwishlist(list:any){
    if(localStorage.getItem('user')){
    const list2={uID:this.CurrentUser_id,ArID:list.id,AricalTitle:"explorDep"};
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

}
