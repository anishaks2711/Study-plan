import {Component} from '@angular/core';
import planData from '../../assets/json/study_plan_list.json';
import { InPPlan } from '../store/models/course.model';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState.model';
import * as SelectedMonthActions from '../store/actions/selectedmonth.action';

interface InProgress{
    month:String,
    courses_count:Number,
    completed:Number,
    incomplete:Number
}

interface btn{
    value:String
    color:String
}


@Component({
    selector:'inpro-elements',
    templateUrl:'./in-progress-elements.component.html',
    styleUrls:['./in-progress-elements.component.css']
})

export class InProgressElementsComponent{

    inpcourses:Observable<InPPlan[]>;
    arr:InPPlan[] = []
    len:number=1;
    types:string = "selmonth"

    constructor(private store: Store<AppState>){
        this.inpcourses = store.select('inpplans');
    }

    selectMonth(data:any){
        this.store.dispatch(new SelectedMonthActions.AddSMonth(data))
      }

    ngOnInit(){
        this.inpcourses.subscribe((ele)=>{this.arr=ele});
        this.len=this.arr.length;
    }

    Btn_props: btn = {value:"Review", color:"#488FB1"};
    inP:InProgress = planData.in_progress;
}