import { CourseReducer } from "./course.reducer";
import { MonthReducer } from "./month.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { StatusReducer } from "./status.reducer";
import { GoalReducer } from "./goal.reducer";
import { DraftReducer } from "./draft.reducer";
import { PlanStatusReducer } from "./planstatus.reducer";
import { SelectedMonthReducer } from "./selectedmonth.reducer";
import { InPReducer } from "./inpplan.reducer";
import { ClosedPlanReducer } from "./closedplan.reducer";

export const rootReducer={};

export interface AppState{
};

export const reducers: ActionReducerMap<AppState, any> = {
    coursesplan: CourseReducer,
    selectedmonth: MonthReducer,
    checkedcourses: StatusReducer,
    monthlygoals: GoalReducer,
    draftplans: DraftReducer,
    studyplans: PlanStatusReducer,
    onmonth: SelectedMonthReducer,
    inpplans: InPReducer,
    closedplans: ClosedPlanReducer
};