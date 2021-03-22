import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Services/articles.service';
import { LocalizationService } from 'src/app/Services/localization.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { IArticle } from 'src/app/ViewModels/iarticle';
import { IPage } from 'src/app/ViewModels/IPage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageDetails: IPage;
  historyArticles: IArticle[] = [];
  factsArticles: IArticle[] = [];
  swiper_config_1: any = {};
  swiper_config_2: any = {};
  currentLang: string;
  constructor(
    private pageDetailsService: PageDetailsService,
    private articlesService: ArticlesService,
    private localizationService: LocalizationService
  ) { 
    this.pageDetails = {id: 0, name: '', title: '', bannerImg: '', bannerVideo: "", description: ''};
    this.currentLang = this.localizationService.getCurrentLang();
  }

  ngOnInit(): void {
    this.getPageDetails();
    this.getHistoryArticles();
    this.getFactsArticles();
    this.initHistorySwiperConfig();
    this.initFactsSwiperConfig();
  }

  // Get page details
  getPageDetails() {
    this.pageDetailsService.getPageDetails("About").subscribe(
      (res)=> {
        this.pageDetails = res[0];
        this.pageDetails.name = `${this.pageDetails.name} Egypt`;
      },
      (err)=> {console.log(err)}
    )
  }

  // Get History Articles
  getHistoryArticles() {
    this.articlesService.getArticlesByPageAndName("About", "History").subscribe(
      res => {this.historyArticles = res},
      err => {console.log(err)}
    )
  }

  // Get Facts Articles
  getFactsArticles() {
    this.articlesService.getArticlesByPageAndName("About", "Facts").subscribe(
      res => {this.factsArticles = res},
      err => {console.log(err)}
    )
  }

  initHistorySwiperConfig() {
    this.swiper_config_1 = {
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination_1',
        clickable:true,
        renderBullet: (index: number, className: string) => {
          return '<span class="' + className + '">' + this.historyArticles[index]?.title + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    }
  }

  initFactsSwiperConfig() {
    this.swiper_config_2 = {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination_2',
        clickable:true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

}
