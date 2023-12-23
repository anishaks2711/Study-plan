import { Component } from '@angular/core';

import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { start_month } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';

interface btn{
  value:String
  color:String
}

@Component({
  templateUrl:'./rank-courses.component.html',
  styleUrls:['./rank-courses.component.css']
  
})

export class RankCoursesComponent {
  m:any
  month:Observable<start_month>;
  constructor(private store: Store<AppState>){
    this.month = store.select('selectedmonth');
  }

  ngOnInit(){
    this.month.subscribe((ele)=>{this.m=ele});
  }
  Btn_back: btn = {value:"Back", color:"#3BACB6"};
  Btn_confirm: btn = {value:"Confirm", color:"#22577E"};
}