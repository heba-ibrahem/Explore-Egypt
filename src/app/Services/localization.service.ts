import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(public translate: TranslateService) { 

  }

  getCurrentLang() :string {
    if (
      !localStorage.getItem('current_lang') ||
      (localStorage.getItem('current_lang') === 'en')
    )
      return 'en';
    else if ((localStorage.getItem('current_lang') === 'ar'))
      return 'ar';
    else 
      return 'en';
  }

  setBaseUrl() :string {
    if (this.getCurrentLang() === 'ar') {
      return 'http://localhost:4000';
    }
    return 'http://localhost:3000';
  }
}
