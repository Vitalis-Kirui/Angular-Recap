import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './Components/goal/goal.component';
import { GoalDetailComponent } from './Components/goal-detail/goal-detail.component';
import { StrikethroughDirective } from './Directives/strikethrough.directive';
import { GoalFormComponent } from './Components/goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavbarComponent } from './Components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
