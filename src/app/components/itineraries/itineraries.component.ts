import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/Services/articles.service';
import { CityService } from 'src/app/Services/city.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { Article } from 'src/app/viewmodels/article';
import { IHotel } from 'src/app/viewmodels/ihotel';
import { IPage } from 'src/app/viewmodels/IPage';

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {
  pageDetails: IPage;
allArticles:Article[]=[]
ArticlesByCity:Article[]=[]
allHotels:IHotel[]=[]
anylHotels:any[]=[]
mixed:any[]=[]
  constructor(private pageDetailsService:PageDetailsService, private ArticleService:ArticlesService,private hotelsService:CityService) {
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      description: '' }

  }

  getPageDetails() {
    this.pageDetailsService.getPageDetails("Itineraries").subscribe(
      (res)=> {
        this.pageDetails = res[0];
        this.pageDetails.name = `${this.pageDetails.name} `;
      },
      (err)=> {console.log(err)}
    )}
 shuffle(array:any) {
      array.sort(() => Math.random() - 0.5);
  }
  ngOnInit(): void {
    let sup1= this.ArticleService.getAll().subscribe(
      (response) => {
response.forEach(art => {
if(art.city){this.allArticles.push(art)}
});
console.log(this.allArticles)  },
      (err) => { console.log(err) }
    );
let sup2= this.hotelsService.getAllHotels().subscribe(
      (response) => {this.allHotels=response;
        console.log(this.allHotels)
this.anylHotels=this.allHotels
        this.mixed =this.allArticles.concat(this.anylHotels)
this.shuffle(this.mixed)
        console.log(this.mixed)},
  (err) => { console.log(err)
  }
);
// do{
//   const random = Math.floor(Math.random() * this.ArticleList.length);
// if(!this.threeArt.includes(this.ArticleList[random]))
//  this.threeArt.push(this.ArticleList[random])}
// while(this.threeArt.length<3)


    this.getPageDetails()

  }

}
