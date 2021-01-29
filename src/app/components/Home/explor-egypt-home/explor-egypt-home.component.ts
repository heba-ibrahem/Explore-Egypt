import { Component, OnInit } from '@angular/core';
import { ExplorEgyptHomeService } from 'src/app/Services/explor-egypt-home.service';
import { IExpiorEgyptHome } from 'src/app/ViewModels/iexpior-egypt-home';

@Component({
  selector: 'app-explor-egypt-home',
  templateUrl: './explor-egypt-home.component.html',
  styleUrls: ['./explor-egypt-home.component.scss']
})
export class ExplorEgyptHomeComponent implements OnInit {
  List:IExpiorEgyptHome[];
  constructor(private service:ExplorEgyptHomeService) { 
    this.List=service.ExplorList;
    console.log(this.List)
  }

  ngOnInit(): void {
  }

}
