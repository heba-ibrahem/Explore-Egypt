import { Component, OnInit } from '@angular/core';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { CuratorsService } from 'src/app/Services/curators.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';
import { Curators } from 'src/app/viewmodels/curators';
import { IPage} from 'src/app/viewmodels/IPage';
import { Article } from 'src/app/viewmodels/article';
import { ActivatedRoute, Router } from '@angular/router';
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
currentDep:IactivitiesDep[]=[]
depId:string|null=''
  constructor(private pageDetailsService: PageDetailsService,private router: Router,public route:ActivatedRoute,public ActivitiesDepService: ActivitiesDepService,public curators:CuratorsService,public Article:ArticlesService) {
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      bannerImg: '',
      bannerVideo: "",
      description: ''
    }

  }


  getPageDetails(id:number) {
    this.pageDetailsService.getPageDetailsById(id+7).subscribe(
      (res)=> {
console.log(this.pageDetails)
        this.pageDetails = res;
         this.pageDetails.name = `${this.pageDetails.name} `;
        console.log(res)

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
this.depId = this.route.snapshot.paramMap.get("ID");

    let sup4= this.ActivitiesDepService.getDepByID(Number(this.depId)).subscribe(
      (response) => {
        this.currentDep[0] = response;
        this.pageDetailsService.getPageDetails(this.currentDep[0].name).subscribe(
          (res)=> {
            this.pageDetails = res[0];
            this.pageDetails.name = `${this.pageDetails.name} `;
          },
          (err)=> {console.log(err)}
        )

        console.log(this.currentDep[0].title);
      },
      (err) => { console.log(err) }
    );

    this.getPageDetails(Number(this.depId));
  }


}
