import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import {appRoutes} from './route';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NewStudyPlanComponent } from './new-study-plan/new-study-plan.component';
import { StudyPlanListComponent } from './study_plans_list/studyplan_list.component';
import { ButtonComponent } from './study_plans_list/button.component';
import { ClosedElementsComponent } from './study_plans_list/closed-elements..component';
import { DraftElementsComponent } from './study_plans_list/draft-elements.component';
import { GetCloGraphComponent } from './study_plans_list/get-clo-graph.component';
import { GetCourseCountComponent } from './study_plans_list/get-course-count.component';
import { GetMonthComponent } from './study_plans_list/get-month.component';
import { GetProGraphComponent } from './study_plans_list/get-pro-graph.component';
import { InProgressElementsComponent } from './study_plans_list/in-progress-elements.component';
import { StudyPlanTypeComponent } from './study_plans_list/study_plan_type.component';
import { MonthDropdownComponent } from './new-study-plan/month-dropdown.component';
import { SelectCoursesComponent } from './select-courses/select-courses.component';
import { RankCoursesComponent } from './rank-courses/rank-courses.component';
import { CategoryComponent } from './select-courses/category.component';
import { GetCourseNameComponent } from './select-courses/get-course-name.component';
import { GetAuthorComponent } from './select-courses/get-author.component';
import { GetDurationComponent } from './select-courses/get-duration.component';
import { GetRatingComponent } from './select-courses/get-rating.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { MyCoursesComponent } from './rank-courses/my-courses.component';

import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {StoreModule} from "@ngrx/store";
import {CourseReducer} from "./store/reducers/course.reducer";
import {reducers} from "./store/reducers";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { InPComponent } from './in-progress/inp.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ViewSummaryComponent } from './view-summary/view-summary.component';
import { GetGoalComponent } from './view-summary/get-goal.component';
import { GetCompletedComponent } from './view-summary/get-completed.component';
import { GetNotCompletedComponent } from './view-summary/get-not-completed.component';
import { PieChartComponent } from './view-summary/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyPlanListComponent,
    HeaderComponent,
    StudyPlanTypeComponent,
    InProgressElementsComponent,
    GetMonthComponent,
    GetCourseCountComponent,
    GetProGraphComponent,
    ButtonComponent,
    DraftElementsComponent,
    ClosedElementsComponent,
    GetCloGraphComponent,
    NewStudyPlanComponent,
    MonthDropdownComponent,
    SelectCoursesComponent,
    RankCoursesComponent,
    CategoryComponent,
    GetCourseNameComponent,
    GetAuthorComponent,
    GetDurationComponent,
    GetRatingComponent,
    ReviewSubmitComponent,
    MyCoursesComponent,
    InPComponent,
    ViewSummaryComponent,
    GetGoalComponent,
    GetCompletedComponent,
    GetNotCompletedComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule, 
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgApexchartsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
