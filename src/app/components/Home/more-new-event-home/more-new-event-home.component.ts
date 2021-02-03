import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { INewEventsHome } from 'src/app/viewmodels/iweek-events-home';

@Component({
  selector: 'app-more-new-event-home',
  templateUrl: './more-new-event-home.component.html',
  styleUrls: ['./more-new-event-home.component.scss']
})
export class MoreNewEventHomeComponent implements OnInit {
  List:INewEventsHome[]=[]
   subscribtion: Subscription[]=[];
  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.subscribtion[0]= this.service.getAllEvents().subscribe(
      (response)=>{
        this.List=response;
        console.log(this.List)
      },
      (err)=>{console.log(err)}
    );
  }

}
