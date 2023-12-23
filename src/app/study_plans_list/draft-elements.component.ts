import {Component} from '@angular/core';
import planData from '../../assets/json/study_plan_list.json';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { DraftPlan } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';
import * as SelectedMonthActions from '../store/actions/selectedmonth.action';

interface Drafts{
    month:String,
    courses_count:Number
}
interface btn{
    value:String
    color:String
}

@Component({
    selector:'draft-elements',
    templateUrl:'./draft-elements.component.html',
    styleUrls:['./draft-elements.component.css']
})

export class DraftElementsComponent{
    dcourses:Observable<DraftPlan[]>;
    arr:DraftPlan[] = []
    len:number;
    types:string = "selmonth"

    constructor(private store: Store<AppState>){
        this.dcourses = store.select('draftplans');
        this.len=1;
    }

    selectMonth(data:any){
        this.store.dispatch(new SelectedMonthActions.AddSMonth(data))
      }

    ngOnInit(){
        this.dcourses.subscribe((ele)=>{this.arr=ele});
        this.len=this.arr.length;
    }

    Btn_props: btn = {value:"Start", color:"#488FB1"};
    future: Drafts[] = planData.drafts;
}