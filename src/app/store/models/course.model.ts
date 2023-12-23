export interface SelCourse {
    id:number;
    name: string;
    author: string;
    duration: number;
    category: string;
  }

export interface start_month {
    name: string;
}

export interface update {
    id:number;
    name: string;
    author:string;
    duration: number;
    category: string;
}

export interface Goals{
    month: string;
    content: string;
}

export interface DraftPlan{
    month: string;
    courses_count: number;
}

export interface InPPlan{
    month:string;
    courses_count:number;
    completed:number;
    incomplete:number;
}

export interface ClosedPlan{
    month: string;
    courses_count:number;
    completed:number;
    incomplete:number;
}

export interface PlanStatus{
    month:String,
    status: String,
    courses: SelCourse[],
    checked: SelCourse[]
}

export interface SelectedMonth{
    month:String
}