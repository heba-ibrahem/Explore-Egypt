import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LocalizationService } from './Services/localization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExploreEgypt';
  currentLang: string = 'en';
  constructor(private localizationService: LocalizationService, @Inject(DOCUMENT) private document: Document) {
    this.currentLang = this.localizationService.getCurrentLang();
    this.loadStyles();
  }
  
  loadStyles() {
    document.documentElement.setAttribute('lang', this.currentLang);
    // console.log(this.currentLang);
    
    if (this.currentLang == 'ar') {
      document.body.classList.add('rtl');
      this.loadArStyles();
    }
  }

  loadArStyles() {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let rtlFixesBundleName = "StyleAr.css";
    let bootstrapRtlBundleName = "bootstrapAr.css";

    // rtl-fixes.css
    let newLink = this.document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.id = "arCss";
    newLink.href = rtlFixesBundleName;
    headTag.appendChild(newLink);
    
    // bootstrap-rtl.min.css
    let bootstrapRtlLink = this.document.createElement("link");
    bootstrapRtlLink.rel = "stylesheet";
    bootstrapRtlLink.type = "text/css";
    bootstrapRtlLink.id = "arCss";
    bootstrapRtlLink.href = bootstrapRtlBundleName;
    headTag.appendChild(bootstrapRtlLink);
  }




}


