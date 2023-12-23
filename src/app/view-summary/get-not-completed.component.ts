import {Component, Input} from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { update, SelCourse} from '../store/models/course.model';
import { AppState } from '../store/AppState.model';


@Component({
    selector:'getnotcompleted',
    template:`
    <p>Incomplete</p>
    <div class="box">
    <ul>
        <li *ngFor="let item of notcomp;">
            <span>{{item.name}}</span>
        </li>
    </ul>
    <p *ngIf="notcomp.length<1">None. You've completed all the courses!!!</p>
    </div>`,
    styles:[`
    .box{ width: 100%; min-height: 100px; max-height:auto; background-color:#f4bbbb;}`]
})

export class GetNotCompletedComponent{
  @Input() month:any
  @Input() completed:any
  @Input() courses:any
  notcomp: SelCourse[]=[]
  k:number=0;
  flag:number=0;

  ngOnInit(){
    this.getnotcomp();
  }

  getnotcomp(){
    for(let i=0;i<this.courses.length;i++)
    {
        for(let j=0;j<this.completed.length;j++)
        {
        if(this.courses[i].id===this.completed[j].id)
        {
            this.flag=1;
            break;
        }
        }
        if(this.flag===0)
        {
            this.notcomp[this.k]=this.courses[i];
            this.k++;
        } 
        this.flag=0;
    }
  }
}