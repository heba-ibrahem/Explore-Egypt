import { Component, OnInit } from '@angular/core';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { IPage } from 'src/app/viewmodels/IPage';

@Component({
  selector: 'app-neighbourhoods',
  templateUrl: './neighbourhoods.component.html',
  styleUrls: ['./neighbourhoods.component.scss']
})
export class NeighbourhoodsComponent implements OnInit {
  pageDetails: IPage;
  neighbourhoods: any;
  constructor(private pageDetailsService: PageDetailsService) { 
    this.pageDetails = {id: 0, name: '', title: '', bannerImg: '', bannerVideo: "", description: ''}

    this.neighbourhoods = [
      {img_url: "7.jpg", title: "Mohandseen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "12.jpg", title: "Al Giza", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "10.jpg", title: "Alexandria", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "13.jpg", title: "El Gouna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "4.jpg", title: "Islamic Cairo", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "14.jpg", title: "Downtown", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "5.jpg", title: "Misr al Jadida", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "1.jpg", title: "Al Duqqi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
    ]
  }

  ngOnInit(): void {
    this.getPageDetails();
  }

  // Get page details
  getPageDetails() {
    this.pageDetailsService.getPageDetails("Neighbourhoods").subscribe(
      (res)=> {
        this.pageDetails = res[0];
        this.pageDetails.name = `Egypt ${this.pageDetails.name}`;
      },
      (err)=> {console.log(err)}
    )
  }
}
