import { Component, ViewChild } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { SelCourse, SelectedMonth, PlanStatus, InPPlan, DraftPlan } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';
import * as StatusActions from '../store/actions/status.action';
import * as PlanStatusActions from '../store/actions/planstatus.action'
import * as DraftActions from '../store/actions/draft.action';
import * as InPActions from '../store/actions/inpplan.action';
import * as ClosedActions from '../store/actions/closedplan.action'

interface btn{
  value:String
  color:String
}

@Component({
  templateUrl: './inp.component.html',
  styleUrls:['./inp.component.css']
  
})

export class InPComponent {
  typeso:string="ongoing"
  typesc:string="closed"
  m:any
  month:Observable<SelectedMonth>;
  finalchecked: Observable<SelCourse[]>;
  farr: SelCourse[]=[];
  // courses:Observable<SelCourse[]>;
  inpcourses: Observable<InPPlan[]>
  inparr: InPPlan[]=[];
  drafts: Observable<DraftPlan[]>
  darr: DraftPlan[]=[]
  courses: SelCourse[]=[];
  plans:Observable<PlanStatus[]>;
  arr:PlanStatus[] = []
  len:any = 1
  dur:any
  idur: number =0;
  cdur:any;
  percomp:any = 0;
  checked:any = [];
  inpobj:any
  incomp:any=0
  closedobj:any
  cclosedobj:any
  closedplan:any
  incompclosed:any

  constructor(private store: Store<AppState>){
    // this.courses = store.select('coursesplan');
    this.plans=store.select('studyplans');
    this.month = store.select('onmonth');
    this.finalchecked = store.select('checkedcourses');
    this.inpcourses = store.select('inpplans');
    this.drafts = store.select('draftplans');
  }

  ngOnInit(){
    // this.courses.subscribe((ele)=>{this.arr=ele});
    this.plans.subscribe((ele)=>{this.arr=ele});
    this.month.subscribe((ele)=>{this.m=ele});
    this.finalchecked.subscribe((ele)=>{this.farr=ele});
    this.inpcourses.subscribe((ele)=>(this.inparr=ele));
    this.drafts.subscribe((ele)=>{this.darr=ele});
    this.dur=0;
    for(let i=0;i<this.arr.length;i++)
    {
      if(this.arr[i].month===this.m.month)
      {
        this.courses=this.arr[i].courses;
        if(this.arr[i].checked.length>0)
        {
          this.farr=this.arr[i].checked;
        }
        break;
      }
    }
    this.len=this.arr.length;
    this.findDuration();
    this.cdur=0;
    for(let i=0;i<this.courses.length;i++)
    {
      let isfound= this.farr.some(element => {
        if(element.id===this.courses[i].id)
        {
          return true;
        }
        return false;
      })
      if(isfound)
      {
        this.checked[i]=true;
        this.cdur+=this.courses[i].duration;
        this.percomp=Math.round((this.cdur/this.dur)*100);
      }
      else{
      this.checked[i]=false;
      }
    }

  }


  checkedCourse(data:any){
    this.store.dispatch(new StatusActions.CheckedCourse(data))
  }

  uncheckedCourse(data:any){
    this.store.dispatch(new StatusActions.UncheckedCourse(data))
  }
  
  percDone(i:any){
    if(this.checked[i]==false)
    {
    this.cdur+=this.courses[i].duration;
    console.log("Completed dur:"+this.cdur);
    this.checkedCourse({id:this.courses[i].id,name:this.courses[i].name,author:this.courses[i].author,duration:this.courses[i].duration,category:this.courses[i].category});
    }
    else{
      this.cdur-=this.courses[i].duration;
      console.log("Completed dur:"+this.cdur);
      this.uncheckedCourse(this.courses[i].id);
    }
    this.idur=this.dur-this.cdur;
    this.checked[i]=!this.checked[i];
    this.percomp=Math.round((this.cdur/this.dur)*100);
  }
  
  findDuration(){
    for(let i=0; i<this.courses.length; i++)
    {
      this.dur+=this.courses[i].duration;
      console.log("totaldur"+this.dur);
    }
  }

  
  OnGoing(data:any){
   this.store.dispatch(new PlanStatusActions.RemoveStatus(data.month))
   this.store.dispatch(new PlanStatusActions.AddStatus(data)) 
   let isfound= this.darr.some(element => {
    if(element.month===data.month)
    {
    return true;
    }
    return false;
    })
    if(isfound)
    {
      this.store.dispatch(new DraftActions.RemoveDraft(data.month));
    }
  //  this.store.dispatch(new DraftActions.RemoveDraft(data.month))
   if(this.inparr.length>0)
   {
    this.closedobj={month:this.inparr[0].month,courses_count:this.inparr[0].courses_count,completed:this.inparr[0].completed,incomplete:this.inparr[0].incomplete}
      if(this.inparr[0].month!==data.month)
      {
        this.store.dispatch(new ClosedActions.AddClosed(this.closedobj))
      for(let i=0;i<this.arr.length;i++)
      {
        if(this.arr[i].month===this.closedobj.month)
        {
          this.closedplan={month:this.arr[i].month, status:"Closed", courses:this.arr[i].courses, checked:this.arr[i].checked }
          break;
        }
      }        
      this.store.dispatch(new PlanStatusActions.AddStatus(this.closedplan)) 
      }
      
      this.store.dispatch(new PlanStatusActions.RemoveStatus(this.inparr[0].month))
   }
   this.incomp=data.courses.length-data.checked.length;
   this.inpobj={month:data.month,courses_count:data.courses.length,completed:data.checked.length,incomplete:this.incomp}
   this.store.dispatch(new InPActions.AddInP(this.inpobj))
  }

  Closed(data:any){
    this.store.dispatch(new InPActions.ClearInP())
    let isfound= this.darr.some(element => {
    if(element.month===data.month)
    {
    return true;
    }
    return false;
    })
    if(isfound)
    {
      this.store.dispatch(new DraftActions.RemoveDraft(data.month));
    }
    
    this.store.dispatch(new PlanStatusActions.RemoveStatus(data.month))
    this.store.dispatch(new PlanStatusActions.AddStatus(data))
    this.incompclosed=data.courses.length-data.checked.length
    this.cclosedobj={month:data.month,courses_count:data.courses.length,completed:data.checked.length,incomplete:this.incompclosed}
    this.store.dispatch(new ClosedActions.AddClosed(this.cclosedobj)) 
  }
  
  Btn_back: btn = {value:"Back", color:"#3BACB6"};
  Btn_submit: btn = {value:"Submit", color:"#398AB9"};
  Btn_summary: btn = {value:"Finish", color:"#22577E"};
}