import { SelCourse } from '../models/course.model';
import * as CourseActions from '../actions/course.actions';

const initialState: SelCourse = {
  id:0,
  name: 'Course Name',
  author: 'Author Name',
  duration: 5,
  category: 'Category Name'
}

export function CourseReducer(state:SelCourse[]=[], action: CourseActions.Actions){
  switch(action.type){
    case CourseActions.ADD_COURSE:
      return[...state,action.payload];
    case CourseActions.REMOVE_COURSE:
      console.log(action.payload);
      const i=state.findIndex(x => x.id === action.payload);
      var copy=Array.from(state);
      copy.splice(i,1);
      return copy;
    case CourseActions.CLEAR_COURSE:
      return [];
    case CourseActions.MOVE_UP:
      var t=Array.from(state);
      var temp=t[action.payload];
      t[action.payload]=t[action.payload-1];
      t[action.payload-1]=temp;
      return t;
    case CourseActions.MOVE_DOWN:
      var t=Array.from(state);
      var temp=t[action.payload];
      t[action.payload]=t[action.payload+1];
      t[action.payload+1]=temp;
      return t;
    default:
      return state;
  }
}
