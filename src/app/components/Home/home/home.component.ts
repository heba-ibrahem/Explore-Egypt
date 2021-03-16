import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { WishListService } from 'src/app/Services/wish-list.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';
import { IPage} from 'src/app/viewmodels/IPage';
import { IUsers } from 'src/app/viewmodels/iusers';
import { INewEventsHome } from 'src/app/viewmodels/iweek-events-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('banner_image_container') banner_image_container: ElementRef|undefined;
  @ViewChild('banner_video_container') banner_video_container: ElementRef|undefined;
  @ViewChild('banner_video') banner_video: ElementRef|undefined;
  @ViewChild('play_btn') play_btn: ElementRef|undefined;
  @ViewChild('pause_btn') pause_btn: ElementRef|undefined;
  pageDetails: IPage;
  CurrentUser: IUsers={};
  user_id :number =0;
  WeekEvent:INewEventsHome | undefined ;
  ActivityList:IactivitiesDep[]|undefined;
  currentUserSubscription: Subscription|null = null;
  wishlist:number[]=[];
  wishlistOfUserId:any[] | undefined;
  constructor(private userservice: UsersServiceService, private homeservice:HomeService
    ,private wishlistservice:WishListService ) {
    this.wishlistservice.getAllWishList().subscribe(
      (response)=>{
        this.wishlist = response.map((item: { ArID: any; }) =>{
         return  item.ArID;
      })

    });
    this.wishlistservice.getAllWishList().subscribe(
      (response)=>{
        this.wishlistOfUserId = response.filter((item:any) => item.uID === this.user_id);

    console.log(this.wishlistOfUserId)
    });
    this.pageDetails = {
      id : 5,
      name : "home",
      title : "",
      bannerImg : "assets/pyramids-2159286.webp",
      bannerVideo: "https://mdbootstrap.com/img/video/Sail-Away",
      description: ""
    }

    if(localStorage.getItem('user')){
      this.user_id = this.userservice.getUserID();
      console.log(this.user_id)
      this.LoadAccount();
    }
   }
   async LoadAccount(){

    this.currentUserSubscription =  (await (await (this.userservice.getUserById(this.user_id)))
     .subscribe(user=>{
       this.CurrentUser = user;
       console.log("asmaa")
     })
    )
   }
  ngOnInit(): void {
    this.homeservice.getWeeksEvents().subscribe(
      (response)=>{
        this.WeekEvent = response.filter(this.calculateDiff).pop();
       console.log(this.WeekEvent)
      },
      (err)=>{console.log(err)}
    );
    this.homeservice.getAllArticles().subscribe(
      (response)=>{
        this.ActivityList = response;
      },
      (err)=>{console.log(err)}
    );
     // this.subscribtion[0] = this.service.getPageByName("home").subscribe(
    //   (response)=>{
    //     this.pageDetails=response;
    //     console.log(response);
    //   },
    //   (err)=>{console.log(err)}
    // );
  }
  calculateDiff(item:any){
    let currentDate = new Date();
    item.date = new Date(item.date);
    const diff = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(item.date.getFullYear(),item.date.getMonth(), item.date.getDate()) ) /(1000 * 60 * 60 * 24));
    return diff <= 10000 ;
   }
  playVideo() {
    if (this.banner_video_container) {
      if (this.banner_video_container.nativeElement.classList.contains('d-none')) {
        this.banner_video_container.nativeElement.classList.remove('d-none');
        this.banner_image_container?.nativeElement.classList.remove('curved-img')
      }
      this.banner_video?.nativeElement.play();
      this.play_btn?.nativeElement.classList.add('hide');
      this.pause_btn?.nativeElement.classList.remove('hide');
    }
  }

  pauseVideo() {
    this.banner_video?.nativeElement.pause();
    this.pause_btn?.nativeElement.classList.add('hide');
    this.play_btn?.nativeElement.classList.remove('hide');
  }

  iaFav(id:number){
  return this.wishlistOfUserId?.find((item:any) => item.ArID === id && item.uID === this.user_id)
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }

}
