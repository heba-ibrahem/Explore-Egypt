import { Component, Inject, OnInit } from '@angular/core';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { CuratorsService } from 'src/app/Services/curators.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';
import { Curators } from 'src/app/viewmodels/curators';
import { IPage} from 'src/app/viewmodels/IPage';
import { Article } from 'src/app/viewmodels/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { itinerariesCity } from 'src/app/viewmodels/itinerariesCitiy';
import { ItinerariesCitiesService } from 'src/app/Services/itineraries-cities.service';
import { DOCUMENT } from '@angular/common';
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
articleInDep:Article[]=[]
threeArt: Article[] = []
idOfDep:number=1
  constructor(@Inject(DOCUMENT) private _document: Document,private pageDetailsService: PageDetailsService,private router: Router,public route:ActivatedRoute,public ActivitiesDepService: ActivitiesDepService,public curators:CuratorsService,public Article:ArticlesService) {
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      bannerImg: '',
      bannerVideo: "",
      description: ''
    }

  }
  refreshPage(id:number){
if(id!=8){
this.router.navigateByUrl('/explorDep/'+ id).then(() => {
  this._document.defaultView?.location.reload();})}
else{this.router.navigateByUrl('/itineraries')}

}
  getPageDetails(id:number) {
    this.pageDetailsService.getPageDetailsById(id+7)?.subscribe(
 (res)=> {
          this.pageDetails = res;
          this.pageDetails.name = `${this.pageDetails.title} `;
        },
        (err)=> {console.log(err)}
      )}
  ngOnInit(): void {
    let sup1= this.ActivitiesDepService.getAll().subscribe(
      (response) => {
response.forEach(dep => {
if(dep!=response[this.idOfDep])
{
  this.departments.push(dep)
}
});


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
console.log(response)
        do{
          const random = Math.floor(Math.random() * this.ArticleList.length);
          if(!this.threeArt.includes(this.ArticleList[random])&&this.ArticleList[random]!= this.articleInDep[random])
           {this.threeArt.push(this.ArticleList[random])}}
          while(this.threeArt.length<3)

      },
      (err) => { console.log(err) }
    );
this.depId = this.route.snapshot.paramMap.get("ID");
this.idOfDep=Number(this.depId)

    // let sup4= this.ActivitiesDepService.getDepByID(Number(this.depId)).subscribe(
    //   (response) => {
    //     this.currentDep[0] = response;
    //     this.pageDetailsService.getPageDetails(this.currentDep[0].name).subscribe(
    //       (res)=> {
    //         this.pageDetails = res[0];
    //         this.pageDetails.name = `${this.pageDetails.name} `;
    //       },
    //       (err)=> {console.log(err)}
    //     )

    //     console.log(this.currentDep[0].title);
    //   },
    //   (err) => { console.log(err) }
    // );

    this.getPageDetails(Number(this.depId));
let sub5 = this.Article.getArticlesByDep(this.depId).subscribe(
  (response) => {
    this.articleInDep = response;
    console.log(this.articleInDep);
  },
  (err) => { console.log(err) }
);
}


}
