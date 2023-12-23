import { Component } from '@angular/core';
import Category from '../../assets/json/courses_list.json';

import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { start_month } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';

interface btn{
  value:String
  color:String
}

interface Cat_gories{
  id:Number,
  name:String
}

@Component({
  templateUrl: 'select-courses.component.html',
  styleUrls:['select-courses.component.css']
})

export class SelectCoursesComponent 
{
  m:any
  month:Observable<start_month>;
  constructor(private store: Store<AppState>){
    this.month = store.select('selectedmonth');
  }

  ngOnInit(){
    this.month.subscribe((ele)=>{this.m=ele});
  }

  Btn_cancel: btn = {value:"Cancel", color:"#3BACB6"};
  Btn_finish: btn = {value:"Rank Courses", color:"#22577E"};
  categories_list: Cat_gories[] = Category.categories;
}