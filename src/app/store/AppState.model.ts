import { SelCourse, start_month, Goals, DraftPlan, PlanStatus, SelectedMonth, InPPlan, ClosedPlan } from './models/course.model';

export interface AppState {
  readonly coursesplan: SelCourse[];
  readonly selectedmonth: start_month;
  readonly checkedcourses: SelCourse[];
  readonly monthlygoals: Goals[];
  readonly draftplans: DraftPlan[];
  readonly studyplans: PlanStatus[];
  readonly onmonth: SelectedMonth;
  readonly inpplans: InPPlan[];
  readonly closedplans: ClosedPlan[];
}