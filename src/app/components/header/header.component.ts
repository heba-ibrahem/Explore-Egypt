import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  constructor() { 

  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.toggleScrollUpBtn()
    this.handleNavSubMenus();
    this.scrollUp();
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
    // this.scrollUpBtn?.nativeElement.addEventListener('click', function() {
    //   $('body, html').animate({
    //     scrollTop: 0
    //   }, 1000)
    // })
  }




}
