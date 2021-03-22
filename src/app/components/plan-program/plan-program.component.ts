import { Component, OnInit } from '@angular/core';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { IPage } from 'src/app/ViewModels/IPage';

@Component({
  selector: 'app-plan-program',
  templateUrl: './plan-program.component.html',
  styleUrls: ['./plan-program.component.scss']
})
export class PlanProgramComponent implements OnInit {

  pageDetails:IPage;
  constructor(private pageDetailsService: PageDetailsService) {
    this.pageDetails = {id: 0, name: '', title: '', bannerImg: '', bannerVideo: "", description: ''}
   }

  ngOnInit(): void {
    this.getPageDetails()
  }

  getPageDetails() {
    this.pageDetailsService.getPageDetails("Plan").subscribe(
      (res)=> {
        this.pageDetails = res[0];
        this.pageDetails.name = `Egypt ${this.pageDetails.name}`;
      },
      (err)=> {console.log(err)}
    )
  }

}
