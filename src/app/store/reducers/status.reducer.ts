import { SelCourse } from '../models/course.model';
import * as StatusActions from '../actions/status.action';



const initialState: SelCourse = {
  id:0,
  name: 'Course Name',
  author: 'author',
  duration: 5,
  category: 'Category Name'
}

export function StatusReducer(state:SelCourse[]=[], action: StatusActions.Actions){
  switch(action.type){
    case StatusActions.CHECKED_COURSE:
      return[...state,action.payload];
    case StatusActions.UNCHECKED_COURSE:
      console.log(action.payload);
      const i=state.findIndex(x => x.id === action.payload);
      var copy=Array.from(state);
      copy.splice(i,1);
      return copy;
    case StatusActions.CLEARCHECKED_COURSE:
        return [];
    default:
      return state;
  }
}
