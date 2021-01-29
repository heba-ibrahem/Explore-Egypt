import { Component, OnInit } from '@angular/core';
import { PlanTripHomeService } from 'src/app/Services/plan-trip-home.service';
import { PlanTripHome } from 'src/app/viewmodels/Iplan-trip-home';

@Component({
  selector: 'app-plan-trip-home',
  templateUrl: './plan-trip-home.component.html',
  styleUrls: ['./plan-trip-home.component.scss']
})
export class PlanTripHomeComponent implements OnInit {
  List:PlanTripHome[];
  constructor(private service:PlanTripHomeService) { 
    this.List=service.PlanList;
    console.log(this.List);
  }

  ngOnInit(): void {

  }

}
