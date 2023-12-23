import {Routes} from '@angular/router'
import { StudyPlanListComponent } from './study_plans_list/studyplan_list.component';
import { NewStudyPlanComponent } from './new-study-plan/new-study-plan.component';
import {SelectCoursesComponent} from './select-courses/select-courses.component';
import { RankCoursesComponent } from './rank-courses/rank-courses.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { InPComponent } from './in-progress/inp.component';
import { ViewSummaryComponent } from './view-summary/view-summary.component';

export const appRoutes:Routes=[
    {path:'MyStudyPlans', component:StudyPlanListComponent},
    {path:'MyStudyPlans/NewPlan', component:NewStudyPlanComponent},
    {path:'MyStudyPlans/NewPlan/SelectCourses', component:SelectCoursesComponent},
    {path:'MyStudyPlans/NewPlan/SelectCourses/RankCourses', component:RankCoursesComponent},
    {path:'MyStudyPlans/NewPlan/SelectCourses/RankCourses/ReviewPlan', component:ReviewSubmitComponent},
    {path:'MyStudyPlans/InProgress', component:InPComponent},
    {path:'MyStudyPlans/NewPlan/SelectCourses/RankCourses/ReviewPlan/InProgress/Summary', component:ViewSummaryComponent},
    {path:'', redirectTo:'/MyStudyPlans', pathMatch:'full'}
]