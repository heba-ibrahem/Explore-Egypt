import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AboutComponent } from './components/about/about.component';
import { CultureComponent } from './components/culture/culture.component';
import { NeighbourhoodsComponent } from './components/neighbourhoods/neighbourhoods.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PlanProgramComponent } from './components/plan-program/plan-program.component';
import { DesginProgramComponent } from './components/desgin-program/desgin-program.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { HomeComponent } from './components/Home/home/home.component';
import { EditProfileComponent } from './components/account/edit-profile/edit-profile.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Swiper.js
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ExplorDepComponent } from './components/explor-dep/explor-dep.component';
import { StartPlanningYourTripComponent } from './components/start-planning-your-trip/start-planning-your-trip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DatepickerModule } from 'ngx-bootstrap/datepicker';






import { MyAccountComponent } from './components/account/my-account/my-account.component';
import { WishListComponent } from './components/account/wish-list/wish-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EditProgramComponent } from './components/edit-program/edit-program.component';
import { MoreNewEventHomeComponent } from './components/Home/more-new-event-home/more-new-event-home.component';
import { NewEventsHomeComponent } from './components/Home/week-events-home/week-events-home.component';
import { ExplorEgyptHomeComponent } from './components/Home/explor-egypt-home/explor-egypt-home.component';
import { ActivitiesHomeComponent } from './components/Home/activities-home/activities-home.component';
import { PlanTripHomeComponent } from './components/Home/plan-trip-home/plan-trip-home.component';
import{ItinerariesComponent} from './components/itineraries/itineraries.component'
import { from } from 'rxjs';
// Swiper.js default config
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExploreComponent,
    AboutComponent,
    CultureComponent,
    NeighbourhoodsComponent,
    PageBannerComponent,
    LoginComponent,
    RegisterComponent,
    PlanProgramComponent,
    DesginProgramComponent,
    ProgramDetailsComponent,
    HomeComponent,
    EditProfileComponent,
    ActivitiesComponent,
    ArticleComponent,
    NotFoundComponent,
    PlanTripHomeComponent,
    ActivitiesHomeComponent,
    ExplorEgyptHomeComponent,
    ExplorDepComponent,
    NewEventsHomeComponent,
    MoreNewEventHomeComponent,
    StartPlanningYourTripComponent,
    EditProgramComponent,
    MyAccountComponent,
    WishListComponent,
    ItinerariesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    // DatepickerModule.forRoot(),
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
