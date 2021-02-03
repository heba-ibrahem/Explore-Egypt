import { Component, OnInit } from '@angular/core';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { CuratorsService } from 'src/app/Services/curators.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';
import { Curators } from 'src/app/viewmodels/curators';
import { PageDetails } from 'src/app/viewmodels/page-details';
import { ArticleService } from 'src/app/Services/article.service';
import { Article } from 'src/app/viewmodels/article';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explor-dep',
  templateUrl: './explor-dep.component.html',
  styleUrls: ['./explor-dep.component.scss']
})
export class ExplorDepComponent implements OnInit {

  pageDetails: PageDetails;
  departments: IactivitiesDep[]=[];
  curatorsList:Curators[]=[]
  ArticleList:Article[]=[]
  constructor(private router: Router,public ActivitiesDepService: ActivitiesDepService,public curators:CuratorsService,public Article:ArticleService) {
    this.pageDetails = {
      id: 2,
      name: 'New & Trending',
      title: 'New & Trending',
      bannerImg: 'assets/im2.jpg',
      bannerVideo: 'assets/v2',
      description: "Check out the latest hotspots and attractions to add to your next holiday."
    }

  }
  justRoute():void{
    this.router.navigate(['/explorDep/1'])

  }
  ngOnInit(): void {
    let sup1= this.ActivitiesDepService.getAll().subscribe(
      (response) => {
        this.departments = response;
        console.log(this.departments);
      },
      (err) => { console.log(err) }
    );
    let sup2= this.curators.getAll().subscribe(
      (response) => {
        this.curatorsList = response;
        console.log(this.curatorsList);
      },
      (err) => { console.log(err) }
    );
    let sup3= this.Article.getAll().subscribe(
      (response) => {
        this.ArticleList = response;
        console.log(this.ArticleList);
      },
      (err) => { console.log(err) }
    );
  }

}
