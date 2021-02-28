import { AfterViewInit, Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IUsers } from 'src/app/viewmodels/iusers';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/Services/localization.service';
// declare var $:JQueryStatic

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('toggler') toggler: ElementRef | undefined;
  @ViewChild('smMenu') smMenu: ElementRef | undefined;
  @ViewChild('scrollUpBtn') scrollUpBtn: ElementRef | undefined;
  @ViewChild('largeNavbar') largeNavbar: ElementRef | undefined;
  @ViewChild('smallNavbar') smallNavbar: ElementRef | undefined;
  islogged:boolean=false;
  CurrentUser: IUsers={};
  user_id :number =0;
  currentLang: string;
  currentUserSubscription: Subscription|null = null;

  constructor(public translate: TranslateService,
    private localizationService: LocalizationService,
    private userService: UsersServiceService,
    ) {
    this.currentLang = this.localizationService.getCurrentLang();
    this.translate.use(this.currentLang);
    // this.loadStyles();

    if(localStorage.getItem('user')){
      this.islogged=true;
      this.user_id = this.userService.getUserID();
      this.loadAccount();
    }
    else{
      this.CurrentUser = {};
      this.islogged=false;
    }
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('current_lang', lang )
    window.location.reload();
    
  }

  // loadStyles() {
  //   document.documentElement.setAttribute('lang', this.currentLang);
  //   if (this.currentLang === 'ar') {
  //     document.body.classList.add('rtl');
  //     require("style-loader!../../src/assets/css/bootstrap-rtl.min.css");
  //     // require("style-loader!../../src/assets/css/style-ltr.css");
  //   } else {
  //     require("style-loader!../../src/assets/css/bootstrap.min.css")
  //   }
  // }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.toggleScrollUpBtn()
    this.handleNavSubMenus();
    this.scrollUp();
    this.fixNavbar();
  }

  // Show/Hide small navbar menu
  toggleMenu() {
    this.toggler?.nativeElement.classList.toggle('open');
    this.smMenu?.nativeElement.classList.toggle('show');
  }

  toggleScrollUpBtn() {
    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset > 300) {
        this.scrollUpBtn?.nativeElement.classList.add('show');
      } else {
        this.scrollUpBtn?.nativeElement.classList.remove('show');
      }
    })
  }

  handleNavSubMenus() {
    let navBarLinks = document.querySelectorAll('.nav-bar .has-drop-down');


    // Show/Hide large navbar submenus
    navBarLinks.forEach((link, i) => {
      link.addEventListener('mouseover', function() {
        if (document.querySelector('.nav-bar .drop-down-menu.show')) {
          document.querySelector('.nav-bar .drop-down-menu.show')?.classList.remove('show')
        }
        document.querySelector(`#drop-down_${i+1}`)?.classList.add('show');
        // document.querySelectorAll('.nav-bar .down-icon').forEach((el)=>el.style.transform = "rotate(0deg)");
        // document.querySelectorAll('.nav-bar .down-icon')[i].style.transform = "rotate(-180deg)";
      })

      document.querySelector(`#drop-down_${i+1}`)?.addEventListener('mouseleave', function() {
        if (document.querySelector('.nav-bar .drop-down-menu.show')) {
          document.querySelector('.nav-bar .drop-down-menu.show')?.classList.remove('show');
        }
        // document.querySelectorAll('.nav-bar .down-icon')[i].style.transform = "rotate(0deg)";
      })
    })
  }

  scrollUp() {
    this.scrollUpBtn?.nativeElement.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }


  // Make navbar fixed
  fixNavbar() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 75) {
        this.largeNavbar?.nativeElement.classList.add('fixed');
        this.smallNavbar?.nativeElement.classList.add('fixed');
      } else {
        this.largeNavbar?.nativeElement.classList.remove('fixed');
        this.smallNavbar?.nativeElement.classList.remove('fixed');
      }
    })
  }


  logout() {
    this.userService.logout()
    console.log("logged out")
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }
  async loadAccount(){
    this.currentUserSubscription = (await this.userService.getUserById(this.user_id))
      .subscribe(user=>{
        this.CurrentUser = user;
        console.log(this.CurrentUser)
      });
    }




}
