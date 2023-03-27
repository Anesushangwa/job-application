import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes  = [
  {path: '', component:   HomeComponent },
  {path: 'applied-application', component:  AppliedJobsComponent },
  {path: 'application-form', component:  JobApplicationFormComponent},
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobApplicationFormComponent,
    AppliedJobsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
