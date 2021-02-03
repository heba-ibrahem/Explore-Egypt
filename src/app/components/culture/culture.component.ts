import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Services/articles.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { IArticle } from 'src/app/viewmodels/iarticle';
import { IPage } from 'src/app/viewmodels/IPage';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {
  pageDetails: IPage;
  articles: IArticle[] = [];
  swiper_config: any = {};
  constructor(
    private pageDetailsService: PageDetailsService,
    private articlesService: ArticlesService
  ) { 
    this.pageDetails = {id: 0, name: '', title: '', bannerImg: '', bannerVideo: "", description: ''}
  }

  ngOnInit(): void {
    this.getPageDetails();
    this.getCultureArticles();
    this.initCultureSwiperConfig();
  }

  // Get page details
  getPageDetails() {
    this.pageDetailsService.getPageDetails("Culture").subscribe(
      (res)=> {
        this.pageDetails = res[0];
        this.pageDetails.name = `Local ${this.pageDetails.name} & Heritage`;
      },
      (err)=> {console.log(err)}
    )
  }

  // Get culture articles
  getCultureArticles() {
    this.articlesService.getArticlesByPage("Culture").subscribe(
      (res) => {
        this.articles = res;
      }, (err) => console.log(err)      
    )
  }

  // Init Swiper config
  initCultureSwiperConfig() {
    this.swiper_config = {
      slidesPerView: 2,
      spaceBetween: 25,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination_1',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 25
        },
      }
    }
  }




}
