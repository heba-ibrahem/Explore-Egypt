import { Injectable } from '@angular/core';
import { IExpiorEgyptHome } from '../ViewModels/iexpior-egypt-home';

@Injectable({
  providedIn: 'root'
})
export class ExplorEgyptHomeService {
  ExplorList:IExpiorEgyptHome[]
  constructor() {
    this.ExplorList=[
      {img:"../assets/1.jpg",Department:"Visa guide",discription:"Essential information before you plan your trip to Egypt"},
      {img:"../assets/3.jpg",Department:"Public transport",discription:"Learn how to arrive in Dubai and the best ways to get around"},
      {img:"../assets/1.jpg",Department:"Places to stay",discription:"Explore an incredible range of accommodation options"}
    ]
   }
}
