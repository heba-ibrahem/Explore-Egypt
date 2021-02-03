import { Component, OnInit } from '@angular/core';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { CuratorsService } from 'src/app/Services/curators.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';
import { Curators } from 'src/app/viewmodels/curators';
import { IPage} from 'src/app/viewmodels/IPage';
import { Article } from 'src/app/viewmodels/article';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';

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
  constructor(private router: Router,public ActivitiesDepService: ActivitiesDepService,public curators:CuratorsService,public Article:ArticlesService) {
    this.pageDetails = {
      id: 2,
      name: 'activities',
      title: 'Top activities in Egypt',
      bannerImg: 'assets/im1.jpg',
      bannerVideo: 'assets/v2',
      description: "Adventure, culture, shopping – name it and you'll find it here in Egypt. Browse all the unforgettable experiences for all kinds of explorers."
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
