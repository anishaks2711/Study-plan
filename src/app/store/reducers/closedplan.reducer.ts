import { ClosedPlan } from '../models/course.model';
import * as ClosedPlanActions from '../actions/closedplan.action';
import { InitialState } from '@ngrx/store/src/models';

const initialState: ClosedPlan = {
    month: '',
    courses_count: 0,
    completed:0,
    incomplete:0
}

export function ClosedPlanReducer(state:ClosedPlan[]=[], action: ClosedPlanActions.Actions){
  switch(action.type){
    case ClosedPlanActions.ADD_CLOSED:
      return[action.payload];
    case ClosedPlanActions.REMOVE_CLOSED:
      console.log(action.payload);
      const i=state.findIndex(x => x.month === action.payload);
      var copy=Array.from(state);
      copy.splice(i,1);
      return copy;
    default:
      return state;
  }
}
