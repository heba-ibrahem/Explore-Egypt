import { Component, OnInit } from '@angular/core';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { CuratorsService } from 'src/app/Services/curators.service';
import { IactivitiesDep } from 'src/app/ViewModels/iactivities-dep';
import { Curators } from 'src/app/ViewModels/curators';
import { IPage} from 'src/app/ViewModels/IPage';
import { Article } from 'src/app/ViewModels/article';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  pageDetails: IPage;
  departments: IactivitiesDep[]=[];
  curatorsList:Curators[]=[]
  ArticleList:Article[]=[]
  threeArt:Article[]=[]
  constructor(private pageDetailsService: PageDetailsService,private router: Router,public ActivitiesDepService: ActivitiesDepService,public curators:CuratorsService,public Article:ArticlesService) {
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      bannerImg: '',
      bannerVideo: "",
      description: '' }

  }

    getPageDetails() {
      this.pageDetailsService.getPageDetails("activities").subscribe(
        (res)=> {
          this.pageDetails = res[0];
          this.pageDetails.name = `${this.pageDetails.name} `;
        },
        (err)=> {console.log(err)}
      )
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
do{
  const random = Math.floor(Math.random() * this.ArticleList.length);
if(!this.threeArt.includes(this.ArticleList[random]))
 this.threeArt.push(this.ArticleList[random])}
while(this.threeArt.length<3)

      },
      (err) => { console.log(err) }
    );
    this.getPageDetails()
  }

}

