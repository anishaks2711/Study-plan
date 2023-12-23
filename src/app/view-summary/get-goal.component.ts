import {Component, Input} from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Goals, start_month } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';


@Component({
    selector:'getgoal',
    template:`
    <div class="box">
    <span>{{goal}}</span>
    </div>`,
    styles:[`
    .box{border: 2px solid black; width: 100%; min-height: 60px; max-height:auto;}`]
})

export class GetGoalComponent{
  mygoal:Observable<Goals[]>
  @Input() month:any
  arr:Goals[] = []
  goal:any

  constructor(private store: Store<AppState>){
    this.mygoal = store.select('monthlygoals');
  }

  ngOnInit(){
    this.mygoal.subscribe((ele)=>{this.arr=ele});
    for(let i=0;i<this.arr.length;i++)
    {
      if(this.arr[i].month===this.month)
      {
        this.goal=this.arr[i].content;
        break;
      }
    }
  }
}