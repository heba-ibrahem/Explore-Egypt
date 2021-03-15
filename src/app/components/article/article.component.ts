import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { param } from 'jquery';
import { ArticlesService } from 'src/app/Services/articles.service';
import { Article } from 'src/app/viewmodels/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public anArticle: Article[] = []
  ArticleList: Article[] = []
  threeArt: Article[] = []
  swiper_config_1: any = {};
  swiper_config_2: any = {};
  constructor(@Inject(DOCUMENT) private _document: Document, private router: ActivatedRoute, private route: Router, public Article: ArticlesService) {

  }

  refreshPage(id: number) {
    this.route.navigateByUrl('/article/' + id).then(() => {
      this._document.defaultView?.location.reload();
    })
  }

  ngOnInit(): void {
    this.initHistorySwiperConfig();
    this.initFactsSwiperConfig();
    let id = this.router.snapshot.paramMap.get("ID");
    let sup3 = this.Article.getArticleByID(Number(id)).subscribe(
      (response) => {
        this.anArticle[0] = response;
        console.log(this.anArticle);
        console.log(id);
      },
      (err) => { console.log(err) }
    );
    let sup4 = this.Article.getAll().subscribe(
      (response) => {
        this.ArticleList = response;
        do {
          const random = Math.floor(Math.random() * this.ArticleList.length);
          if (!this.threeArt.includes(this.ArticleList[random]))
            this.threeArt.push(this.ArticleList[random])
        }
        while (this.threeArt.length < 3)
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
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return '<span class="' + className + '">' + '</span>';
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
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }

}

