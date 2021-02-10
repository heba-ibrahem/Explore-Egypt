import { Component, OnInit } from '@angular/core';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { CuratorsService } from 'src/app/Services/curators.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';
import { Curators } from 'src/app/viewmodels/curators';
import { IPage} from 'src/app/viewmodels/IPage';
import { Article } from 'src/app/viewmodels/article';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';
@Component({
  selector: 'app-explor-dep',
  templateUrl: './explor-dep.component.html',
  styleUrls: ['./explor-dep.component.scss']
})
export class ExplorDepComponent implements OnInit {

  pageDetails: IPage;
  departments: IactivitiesDep[]=[];
  curatorsList:Curators[]=[]
  ArticleList:Article[]=[]
  constructor(private pageDetailsService: PageDetailsService,private router: Router,public ActivitiesDepService: ActivitiesDepService,public curators:CuratorsService,public Article:ArticlesService) {
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      bannerImg: '',
      bannerVideo: "",
      description: ''
    }

  }


  getPageDetails() {
    this.pageDetailsService.getPageDetails("New").subscribe(
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
        console.log(this.ArticleList);
      },
      (err) => { console.log(err) }
    );
    this.getPageDetails()

  }

}
