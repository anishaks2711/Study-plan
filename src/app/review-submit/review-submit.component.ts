import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SelCourse, start_month } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';
import * as DraftActions from '../store/actions/draft.action';
import * as CourseActions from '../store/actions/course.actions';
import * as PlanStatusActions from '../store/actions/planstatus.action';

interface btn{
  value:String
  color:String
}

@Component({
  templateUrl:'./review-submit.component.html',
  styleUrls:['./review-submit.component.css']
  
})

export class ReviewSubmitComponent {
  courses:Observable<SelCourse[]>;
  arr:SelCourse[] = []
  len:any
  dur:any
  types: string = "draft"
  m:any
  month:Observable<start_month>;
  draftObj:any

  constructor(private store: Store<AppState>){
    this.courses = store.select('coursesplan');
    this.month = store.select('selectedmonth');
    this.len=1;
  }

  addDraft(data:any){
    this.store.dispatch(new PlanStatusActions.AddStatus(data))
    this.draftObj={month:data.month,courses_count:data.courses.length }
    this.store.dispatch(new DraftActions.AddDraft(this.draftObj))
    this.store.dispatch(new CourseActions.ClearCourse())
  }

  ngOnInit(){
    this.courses.subscribe((ele)=>{this.arr=ele});
    this.month.subscribe((ele)=>{this.m=ele});
    this.dur=0;
    this.len=this.arr.length;
    this.findDuration();
  }
  
  findDuration(){
    for(let i=0; i<this.len; i++)
    {
      this.dur+=this.arr[i].duration;
    }
  }
  
  Btn_back: btn = {value:"Back", color:"#3BACB6"};
  Btn_submit: btn = {value:"Submit", color:"#22577E"};
  Btn_start: btn = {value:"Start", color:"#40c057"};
}