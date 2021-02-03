import { Component, OnInit } from '@angular/core';
import { PageDetailsService } from 'src/app/Services/page-details.service';
import { IPage } from 'src/app/viewmodels/IPage';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  pageDetails: IPage;
  cards: any;
  constructor(private pageDetailsService: PageDetailsService) { 
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      bannerImg: '',
      bannerVideo: "",
      description: ''
    }

    this.cards = [
      {
        title: 'About Egypt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!',
        img_url: '11.jpg',
        path: '/about'
      },
      {
        title: 'Heritage & Culture',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!',
        img_url: '3.jpg',
        path: '/culture'
      },
      {
        title: 'Neighbourhoods in Egypt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!',
        img_url: '6.jpg',
        path: '/neighbourhoods'
      }
    ]
  }

  ngOnInit(): void {
    this.getPageDetails();
  }

  // Get page details
  getPageDetails() {
    this.pageDetailsService.getPageDetails("Explore").subscribe(
      (res)=> {
        this.pageDetails = res[0];
        this.pageDetails.name = `${this.pageDetails.name} Egypt`;
      },
      (err)=> {console.log(err)}
    )
  }

}
