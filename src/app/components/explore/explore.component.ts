import { Component, OnInit } from '@angular/core';
import { PageDetails } from 'src/app/viewmodels/page-details';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  pageDetails: PageDetails;
  journey: any;
  constructor() { 
    this.pageDetails = {
      id: 1,
      name: 'Explore Egypt',
      title: 'Discover Egypt',
      bannerImg: 'assets/images/1.jpg',
      bannerVideo: "assets/video/Let's-Go-Egypt",
      description: 'Egypt is a city that needs to be seen to be believed. Find out all you need to know about the place of endless possibilities.'
    }

    this.journey = [
      {
        title: 'About Egypt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!',
        img_url: 'assets/images/11.jpg',
        path: '/about'
      },
      {
        title: 'Heritage & Culture',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!',
        img_url: 'assets/images/3.jpg',
        path: '/culture'
      },
      {
        title: 'Neighbourhoods in Egypt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!',
        img_url: 'assets/images/6.jpg',
        path: '/neighbourhoods'
      }
    ]
  }

  ngOnInit(): void {
  }

}
