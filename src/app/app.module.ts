import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PlanProgramComponent } from './components/plan-program/plan-program.component';
import { DesginProgramComponent } from './components/desgin-program/desgin-program.component';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';

import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AdminPanelComponent } from './components/Admin/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PlanProgramComponent,
    DesginProgramComponent,
    ProgramDetailsComponent,
    HomeComponent,
    EditProfileComponent,
    AdminPanelComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
