import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/Services/localization.service';
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
  currentLang: string = 'en';
  constructor(private pageDetailsService: PageDetailsService, private localizationService: LocalizationService) { 
    this.pageDetails = {
      id: 0,
      name: '',
      title: '',
      bannerImg: '',
      bannerVideo: "",
      description: ''
    }

    this.currentLang = this.localizationService.getCurrentLang();

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
    this.switchCards();
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

  switchCards() {
    if (this.currentLang === 'ar') {
      this.cards = [
        {
          title: 'عن مصر',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.',
          img_url: '11.jpg',
          path: '/about'
        },
        {
          title: 'التاريخ والتراث',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.',
          img_url: '3.jpg',
          path: '/culture'
        },
        {
          title: 'الأحياء في مصر',
          description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون.',
          img_url: '6.jpg',
          path: '/neighbourhoods'
        }
      ]
    }
  }

}
