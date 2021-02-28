import { Component } from '@angular/core';
import { LocalizationService } from './Services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExploreEgypt';
  currentLang: string = 'en';
  constructor(private localizationService: LocalizationService) {
    this.currentLang = this.localizationService.getCurrentLang();
    this.loadStyles();
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
