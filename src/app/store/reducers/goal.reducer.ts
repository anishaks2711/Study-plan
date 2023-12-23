import { Goals } from '../models/course.model';
import * as GoalsActions from '../actions/goals.action';



const initialState: Goals = {
    month: 'January',
    content: ' '
}

export function GoalReducer(state:Goals[]=[], action: GoalsActions.Actions){
  switch(action.type){
    case GoalsActions.ADD_GOAL:
      return[...state,action.payload];
    default:
      return state;
  }
}
