import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/Services/localization.service';
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
  currentLang: string;
  constructor(private pageDetailsService: PageDetailsService, private localizationService: LocalizationService) { 
    this.pageDetails = {id: 0, name: '', title: '', bannerImg: '', bannerVideo: "", description: ''}
    this.currentLang = this.localizationService.getCurrentLang();

    this.neighbourhoods = [
      {img_url: "7.jpg", title: "Mohandseen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "12.jpg", title: "Al Giza", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "10.jpg", title: "Alexandria", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "13.jpg", title: "El Gouna", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "4.jpg", title: "Islamic Cairo", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "14.jpg", title: "Downtown", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "5.jpg", title: "Misr al Jadida", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
      {img_url: "1.jpg", title: "Al Duqqi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel nulla dignissimos, quia iure nisi beatae!"},
    ];
    this.switchArrayBasedOnLang();
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

  switchArrayBasedOnLang() {
    if (this.currentLang === 'ar') {
      this.neighbourhoods = [
        {img_url: "7.jpg", title: "المهندسين", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "12.jpg", title: "الجيزة", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "10.jpg", title: "الاسكندرية", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "13.jpg", title: "الجونة", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "4.jpg", title: "قاهرة المُعّز", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "14.jpg", title: "وسط البلد", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "5.jpg", title: "مصر الجديدة", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
        {img_url: "1.jpg", title: "الدُقّي", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
      ]
    }
  }
}
