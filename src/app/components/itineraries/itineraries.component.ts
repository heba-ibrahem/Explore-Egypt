import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';
import { CityService } from 'src/app/Services/city.service';
import { ItinerariesCitiesService } from 'src/app/Services/itineraries-cities.service';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { Article } from 'src/app/ViewModels/article';
import { IHotel } from 'src/app/ViewModels/ihotel';
import { IPage } from 'src/app/ViewModels/IPage';
import { itinerariesCity } from 'src/app/ViewModels/itinerariesCitiy';
import { ActivitiesDepService } from 'src/app/Services/activities-dep.service';
import { IactivitiesDep } from 'src/app/ViewModels/iactivities-dep';

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {
  pageDetails: IPage;
  allArticles: Article[] = []
  ArticlesByCity: Article[] = []
  allHotels: IHotel[] = []
  anylHotels: any[] = []
  mixed: any[] = []
  mixedByCity: any[] = []
  cities: itinerariesCity[] = []
  departments: IactivitiesDep[] = [];

  constructor(@Inject(DOCUMENT) private _document: Document, private router: Router, private ActivitiesDepService: ActivitiesDepService, private citesServices: ItinerariesCitiesService, private pageDetailsService: PageDetailsService, private ArticleService: ArticlesService, private hotelsService: CityService) {
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      description: ''
    }

  }
  refreshPage(id: number) {
    if (id != 8) {
      this.router.navigateByUrl('/explorDep/' + id).then(() => {
        this._document.defaultView?.location.reload();
      })
    }
    else { this.router.navigateByUrl('/itineraries') }

  }
  filter(cityy: any) {
    console.log(cityy.target.value)
    if (cityy.target.value.toLowerCase() != 'ALL CITIES'.toLowerCase()) {

      this.mixedByCity = this.mixed.filter(ele => ele.city.toLowerCase() == cityy.target.value.toLowerCase())
      console.log(this.mixedByCity)
    }
    else { this.mixedByCity = this.mixed }
  }
  getPageDetails() {
    this.pageDetailsService.getPageDetails("Itineraries").subscribe(
      (res) => {
        this.pageDetails = res[0];
        this.pageDetails.name = `${this.pageDetails.name} `;
      },
      (err) => { console.log(err) }
    )
  }
  shuffle(array: any) {
    array.sort(() => Math.random() - 0.5);
  }
  ngOnInit(): void {
    let sup1 = this.ArticleService.getAll().subscribe(
      (response) => {
        response.forEach(art => {
          if (art.city) { this.allArticles.push(art) }
        });
        console.log(this.allArticles)
      },
      (err) => { console.log(err) }
    );
    let sup2 = this.hotelsService.getAllHotels().subscribe(
      (response) => {
        this.allHotels = response;
        console.log(this.allHotels)
        this.anylHotels = this.allHotels
        let mix = this.anylHotels.concat(this.allArticles)
        this.mixed = mix
        this.shuffle(this.mixed)
        console.log(this.mixed)
        this.mixedByCity = this.mixed
      },
      (err) => {
        console.log(err)
      }
    );
    let sub3 = this.citesServices.getAll().subscribe(
      (response) => {
        this.cities = response;
        console.log(this.cities);
      },
      (err) => { console.log(err) }
    ); let sup4 = this.ActivitiesDepService.getAll().subscribe(
      (response) => {

        response.forEach(dep => {
          if(dep!=response[7])
          {
            this.departments.push(dep)
          }
      },);},
      (err) => { console.log(err) }
    );
    // do{
    //   const random = Math.floor(Math.random() * this.ArticleList.length);
    // if(!this.threeArt.includes(this.ArticleList[random]))
    //  this.threeArt.push(this.ArticleList[random])}
    // while(this.threeArt.length<3)


    this.getPageDetails()

  }

}
