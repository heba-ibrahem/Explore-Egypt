import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
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
  constructor(private localizationService: LocalizationService,private router: Router, @Inject(DOCUMENT) private document: Document) {
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
    // console.log(this.currentLang);
    
    if (this.currentLang === 'ar') {
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
