import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { PlanTripHomeService } from 'src/app/Services/plan-trip-home.service';
import { PlanTripHome } from 'src/app/viewmodels/Iplan-trip-home';

@Component({
  selector: 'app-plan-trip-home',
  templateUrl: './plan-trip-home.component.html',
  styleUrls: ['./plan-trip-home.component.scss']
})
export class PlanTripHomeComponent implements OnInit {
  List:PlanTripHome[]=[];
  currentUserSubscription: Subscription|null = null;
  constructor(private homeService:HomeService) { 
    this.currentUserSubscription =this.homeService.getAllPlaneYourTrip()
    .subscribe(response=>{
     this.List = response;
    })
    console.log(this.List);
  }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }

}
