import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HomeComponent } from './components/home/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AdminPanelComponent } from './components/Admin/admin-panel/admin-panel.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ArticleComponent } from './components/article/article.component';
import { TrendingComponent } from './components/trending/trending.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanTripHomeComponent } from './components/home/plan-trip-home/plan-trip-home.component';
import { ActivitiesHomeComponent } from './components/home/activities-home/activities-home.component';
import { ExplorEgyptHomeComponent } from './components/home/explor-egypt-home/explor-egypt-home.component';
// Swiper.js
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
    AdminPanelComponent,
    ActivitiesComponent,
    ArticleComponent,
    TrendingComponent,
    NotFoundComponent,
    PlanTripHomeComponent,
    ActivitiesHomeComponent,
    ExplorEgyptHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule
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
