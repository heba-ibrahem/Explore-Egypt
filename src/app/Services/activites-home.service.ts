import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivitesHome } from '../ViewModels/iactivites-home';

@Injectable({
  providedIn: 'root'
})
export class ActivitesHomeService {
  ActivitesList:IActivitesHome[]
  constructor(private http: HttpClient) { 
    this.ActivitesList=[
      {img:"../assets/1.jpg",title:"Jumeirah Mosque",Department:"SIGHTS & ATTRACTIONS",discription:"GAIN INSIGHTS INTO ISLAMIC CULTURE AT JUMEIRAH MOSQUE"},
      {img:"../assets/3.jpg",title:"Alserkal Avenue",Department:"ARTS & CULTURE",discription:"WHERE LOCAL ARTISTS ADD CREATIVITY TO DUBAI'S VIBRANT ART SCENE"},
      {img:"../assets/1.jpg",title:"Al Shindagha Museum",Department:"SIGHTS & ATTRACTIONS",discription:"GLIMPSE INTO DUBAI'S RICH HISTORY"}
    ]
    
  }
}
