import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { IactivitiesDep } from 'src/app/viewmodels/iactivities-dep';

@Component({
  selector: 'app-activities-home',
  templateUrl: './activities-home.component.html',
  styleUrls: ['./activities-home.component.scss']
})
export class ActivitiesHomeComponent implements OnInit {
  List:IactivitiesDep[]|null=null;
  subscribtion: Subscription[]=[];
  constructor(private servies:HomeService) { 
  }

  ngOnInit(): void {
    this.subscribtion[0]= this.servies.getAllArticles().subscribe(
      (response)=>{
        this.List=response;
      },
      (err)=>{console.log(err)}
    );
  }

}
