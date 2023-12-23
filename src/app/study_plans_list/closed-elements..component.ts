import {Component} from '@angular/core';
import planData from '../../assets/json/study_plan_list.json';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { ClosedPlan } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';
import * as SelectedMonthActions from '../store/actions/selectedmonth.action';

interface btn{
    value:String
    color:String
}

interface History{
    month:String,
    courses_count:Number,
    completed:Number,
    incomplete:Number
}

@Component({
    selector:'closed-elements',
    templateUrl:'./closed-elements.component.html',
    styleUrls:['./closed-elements.component.css']
})

export class ClosedElementsComponent{
    ccourses:Observable<ClosedPlan[]>;
    arr:ClosedPlan[] = []
    len:number;
    types:string = "selmonth"

    constructor(private store: Store<AppState>){
        this.ccourses = store.select('closedplans');
        this.len=1;
    }

    selectMonth(data:any){
        this.store.dispatch(new SelectedMonthActions.AddSMonth(data))
      }

    ngOnInit(){
        this.ccourses.subscribe((ele)=>{this.arr=ele});
        this.len=this.arr.length;
    }
    Btn_props: btn = {value:"View", color:"#488FB1"};
    past:History[] = planData.history;
}