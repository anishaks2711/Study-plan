import { Component, Input } from '@angular/core';
import Courses_list from '../../assets/json/courses_list.json';
import { Store } from '@ngrx/store';
import { AppState} from '../store/AppState.model';
import * as CourseActions from '../store/actions/course.actions';
import { Observable} from 'rxjs';
import { SelCourse } from '../store/models/course.model';
import { faCheck} from '@fortawesome/free-solid-svg-icons';


interface Courses{
  id:Number,
  name:String,
  author:String,
  duration:Number,
  category:Number,
  rating:Number
}

interface btn{
  value:String
  color:String
}

interface change_btn{
  value:String
  color:String
}

@Component({
  selector:"cat",
  templateUrl:'./category.component.html',
  styleUrls:['./category.component.css']
  
})

export class CategoryComponent {
    @Input() title:any
    @Input() id:any
    faCheck=faCheck
    checked:Boolean[] =[false,false,false,false,false,false]
    selectedcourses: Observable<SelCourse[]>;
    arr:SelCourse[]=[]
    Cat_courses: Courses[]=Courses_list.courses;
    count:any = 0
    clicked:boolean=false
    Btn_props: btn = {value:"Select", color:"#39AEA9"};
    Btn_change: change_btn= {value:"Remove", color:"#FC4F4F"}
    types: string = "course"
    selected: Boolean[] =[]
    cat_id: any

    constructor(private store: Store<AppState>){
      this.selectedcourses = store.select('coursesplan');
    }

    ngOnInit(){
      this.selectedcourses.subscribe((ele)=>{this.arr=ele});
      for(let i=0;i<this.Cat_courses.length;i++)
      {
        let isfound= this.arr.some(element => {
          if(element.id===this.Cat_courses[i].id)
          {
            return true;
          }
          return false;
        })
        if(isfound)
        {
          this.selected[i]=true;
          this.checked[this.Cat_courses[i].id.valueOf()/10]=true;
        }
        else{
          this.selected[i]=false;
          this.checked[this.Cat_courses[i].id.valueOf()/10]=false;
        }
      }
    }

    addCourse(data:any){
      this.store.dispatch(new CourseActions.AddCourse(data))
    }

    removeCourse(data:any){
      this.store.dispatch(new CourseActions.RemoveCourse(data))
    }

    courseHandler(newData:any){
      this.count=newData.count;
      if(newData.flag==1 && this.count===1)
        {
          console.log("add Course");
          this.addCourse(newData.data);}
      else if(newData.flag==-1 && this.count===0)
      {
        console.log("called remove course")
        this.removeCourse(newData.data.id);
      }
    }

    isShown: boolean=false;
    countClick(){
      this.count=this.count+1;
    }
    toggleShow(){
      this.isShown=!this.isShown;
    }
}