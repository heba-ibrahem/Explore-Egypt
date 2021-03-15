import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IPage } from 'src/app/viewmodels/IPage';


@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @ViewChild('banner_image_container') banner_image_container: ElementRef|undefined;
  @ViewChild('banner_video_container') banner_video_container: ElementRef|undefined;
  @ViewChild('banner_video') banner_video: ElementRef|undefined;
  @ViewChild('play_btn') play_btn: ElementRef|undefined;
  @ViewChild('pause_btn') pause_btn: ElementRef|undefined;
  @Input() pageDetails: IPage = {id:0, name:'', title:'', bannerImg:'', bannerVideo:'', description:''}

  constructor() { }

  ngOnInit(): void {

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
