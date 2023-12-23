import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { SelectedMonth, PlanStatus, SelCourse } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';

interface btn{
  value:String
  color:String
}

@Component({
  templateUrl:'./view-summary.component.html',
  styleUrls:['./view-summary.component.css']
  
})

export class ViewSummaryComponent {
  pietype1: string = "perccomp"
  pietype2: string = "category"
  m:any
  month:Observable<SelectedMonth>;
  plans:Observable<PlanStatus[]>;
  arr: PlanStatus[]=[]
  // completed:Observable<SelCourse[]>;
  // compcourse: SelCourse[] =[];
  courses:any
  compcourse: any

  len: number=0;
  i:number=0;
  totaldur:number=0;
  

  constructor(private store: Store<AppState>){
    this.month = store.select('onmonth');
    this.plans= store.select('studyplans')
    // this.completed = store.select('checkedcourses');
  }

  ngOnInit(){
    this.month.subscribe((ele)=>{this.m=ele});
    // this.completed.subscribe((ele)=>{this.compcourse=ele});
    // this.len=this.compcourse.length;
    this.plans.subscribe((ele)=>{this.arr=ele});
    for(let i=0;i<this.arr.length;i++)
    {
      if(this.arr[i].month===this.m.month)
      {
        this.courses=this.arr[i].courses;
        this.compcourse=this.arr[i].checked;
        break;
      }
    }
    this.totalduration();
  }

  totalduration(){
    for(this.i=0;this.i<this.compcourse.length;this.i++)
    {
      this.totaldur+=this.compcourse[this.i].duration;
    }

  }

  Btn_back: btn = {value:"Back", color:"#3BACB6"};
  Btn_home: btn = {value:"Home", color:"#22577E"};
}