import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { SelCourse } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import * as CourseActions from '../store/actions/course.actions';


@Component({
  selector:"mycourses",
  templateUrl:'./my-courses.component.html',
  styleUrls:['./my-courses.component.css']
})

export class MyCoursesComponent 
{
  courses:Observable<SelCourse[]>;
  arr:SelCourse[] = []
  len:number;
  faArrowUp=faArrowUp;
  faArrowDown=faArrowDown;

  constructor(private store: Store<AppState>){
    this.courses = store.select('coursesplan');
    this.len=1;
  }

  ngOnInit(){
    this.courses.subscribe((ele)=>{this.arr=ele});
    this.len=this.arr.length;
    console.log(this.arr);
  }

  moveUp(i:any){
    this.store.dispatch(new CourseActions.MoveUp(i))
  }

  moveDown(i:any){
    this.store.dispatch(new CourseActions.MoveDown(i))
  }

}