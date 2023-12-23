import { PlanStatus } from '../models/course.model';
import * as PlanStatusActions from '../actions/planstatus.action';

const initialState: PlanStatus = {
    month: 'January',
    status: 'Draft',
    courses: [],
    checked: []
}

export function PlanStatusReducer(state:PlanStatus[]=[], action: PlanStatusActions.Actions){
  switch(action.type){
    case PlanStatusActions.ADD_STATUS:
      return[...state,action.payload];
    case PlanStatusActions.REMOVE_STATUS:
      const i=state.findIndex(x => x.month === action.payload);
      var copy=Array.from(state);
      copy.splice(i,1);
      return copy;
    default:
      return state;
  }
}
