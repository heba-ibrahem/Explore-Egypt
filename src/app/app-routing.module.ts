import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ArticleComponent } from './components/article/article.component';
import { CultureComponent } from './components/culture/culture.component';
import { DesginProgramComponent } from './components/desgin-program/desgin-program.component';
import { EditProfileComponent } from './components/account/edit-profile/edit-profile.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NeighbourhoodsComponent } from './components/neighbourhoods/neighbourhoods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlanProgramComponent } from './components/plan-program/plan-program.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { RegisterComponent } from './components/register/register.component';
import { ExplorDepComponent } from './components/explor-dep/explor-dep.component';
import { AuthGuard } from './gurds/auth.guard';
import { HotelsComponent } from './components/hotels/hotels.component';
import { EditProgramComponent } from './edit-program/edit-program.component';
import { MyAccountComponent } from './components/account/my-account/my-account.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'about', component: AboutComponent},
  {path: 'culture', component: CultureComponent},
  {path: 'neighbourhoods', component: NeighbourhoodsComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'article/:ID', component: ArticleComponent},
  {path: 'explorDep/:ID', component: ExplorDepComponent},
  {path: 'planProgram', component: PlanProgramComponent},
  {path: 'designProgram', component: DesginProgramComponent},
  {path: 'editProgram/:id', component: EditProgramComponent},
  {path: 'programDetails/:pID', component: ProgramDetailsComponent },
  {path: 'account/editProfile', component: EditProfileComponent, canActivate:[AuthGuard]},
  {path:'account/dashboard',component:MyAccountComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   }
