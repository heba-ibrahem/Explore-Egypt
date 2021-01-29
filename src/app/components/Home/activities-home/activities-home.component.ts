import { Component, OnInit } from '@angular/core';
import { ActivitesHomeService } from 'src/app/Services/activites-home.service';
import { IActivitesHome } from 'src/app/ViewModels/iactivites-home';

@Component({
  selector: 'app-activities-home',
  templateUrl: './activities-home.component.html',
  styleUrls: ['./activities-home.component.scss']
})
export class ActivitiesHomeComponent implements OnInit {
   List:IActivitesHome[];
  constructor(private servies:ActivitesHomeService) { 
    this.List=servies.ActivitesList;
    console.log(this.List)
  }

  ngOnInit(): void {
  }

}
