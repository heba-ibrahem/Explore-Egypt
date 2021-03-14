import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalizationService } from './Services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'ExploreEgypt';
  currentLang: string = 'en';
  constructor(private localizationService: LocalizationService,private router: Router) {
    this.currentLang = this.localizationService.getCurrentLang();
    this.loadStyles();
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
  
  loadStyles() {
    document.documentElement.setAttribute('lang', this.currentLang);
    console.log(this.currentLang);
    
    if (this.currentLang === 'ar') {
      document.body.classList.add('rtl');
      // require("style-loader!../assets/css/bootstrap-rtl.min.css");
      // require("style-loader!../../src/assets/css/rtl-fixes.css");
    } else {
      // require("style-loader!../assets/css/bootstrap.min.css")
    }
  }
}
