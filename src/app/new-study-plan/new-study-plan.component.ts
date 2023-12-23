import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState} from '../store/AppState.model';
import { start_month } from '../store/models/course.model';
import * as GoalActions from '../store/actions/goals.action';
import { Observable} from 'rxjs';

interface date_type{
  value:String
}

interface btn{
  value:String
  color:String
}

@Component({
  templateUrl: './new-study-plan.component.html',
  styleUrls: ['./new-study-plan.component.css']
  
})
export class NewStudyPlanComponent {
  Date_type:date_type[]=[{value:"Start Date"}, {value:"End Date"}]
  Btn_cancel: btn = {value:"Cancel",color:"#3BACB6"};
  Btn_finish: btn = {value:"Select Courses",color:"#22577E"};
  types: string = "goal"
  goal:string=""
  m:any
  month:Observable<start_month>;

  ngOnInit(){
    this.month.subscribe((ele)=>{this.m=ele});
  }

  constructor(private store: Store<AppState>){
    this.month = store.select('selectedmonth');
  }

  addGoal(data:any){
    this.store.dispatch(new GoalActions.AddGoal(data))
  }
  
  
}