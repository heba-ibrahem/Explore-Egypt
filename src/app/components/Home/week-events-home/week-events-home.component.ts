import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { INewEventsHome } from 'src/app/viewmodels/iweek-events-home';

@Component({
  selector: 'app-new-events-home',
  templateUrl: './week-events-home.component.html',
  styleUrls: ['./week-events-home.component.scss']
})
export class NewEventsHomeComponent implements OnInit {
   List:INewEventsHome[]=[]
   subscribtion: Subscription[]=[];
  constructor(private service:HomeService) { 
  
  }

  ngOnInit(): void {
    this.subscribtion[0]= this.service.getAllEvents().subscribe(
      (response)=>{
        this.List=response;
      },
      (err)=>{console.log(err)}
    );
  }

}
