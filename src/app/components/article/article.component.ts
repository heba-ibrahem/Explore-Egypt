import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ArticlesService } from 'src/app/Services/articles.service';
import { Article } from 'src/app/viewmodels/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public anArticle:Article[]=[]
  ArticleList:Article[]=[]
  swiper_config_1: any = {};
  swiper_config_2: any = {};
  constructor(private router: ActivatedRoute,public Article:ArticlesService) {


  }



  ngOnInit(): void {
    this.initHistorySwiperConfig();
    this.initFactsSwiperConfig();
    let id = this.router.snapshot.paramMap.get("ID");
    let sup3= this.Article.getArticleByID(Number(id)).subscribe(
      (response) => {
        this.anArticle[0] = response;
        console.log(this.anArticle);
        console.log(id);
      },
      (err) => { console.log(err) }
    );
    let sup4= this.Article.getAll().subscribe(
      (response) => {
        this.ArticleList = response;
        console.log(this.anArticle);
      },
      (err) => { console.log(err) }
    );
    }
  initHistorySwiperConfig() {
    this.swiper_config_1 = {
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination_1',
        clickable:true,
        renderBullet: (index: number, className: string) => {
          return '<span class="' + className + '">' +  '</span>';
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

