import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageDetails } from 'src/app/viewmodels/page-details';

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
  pageDetails: PageDetails;
  subscribtion: Subscription[]=[];
  constructor() {
    this.pageDetails = {
      id : 5,
      name : "home",
      title : "",
      bannerImg : "assets/pyramids-2159286.webp",
      bannerVideo: "https://mdbootstrap.com/img/video/Sail-Away",
      description: ""
    }
   }

  ngOnInit(): void {
     // this.subscribtion[0] = this.service.getPageByName("home").subscribe(
    //   (response)=>{
    //     this.pageDetails=response;
    //     console.log(response);
    //   },
    //   (err)=>{console.log(err)}
    // );
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

}
