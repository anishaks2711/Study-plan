import { InPPlan } from '../models/course.model';
import * as InPActions from '../actions/inpplan.action';
import { InitialState } from '@ngrx/store/src/models';

const initialState: InPPlan = {
    month: '',
    courses_count: 0,
    completed:0,
    incomplete:0
}

export function InPReducer(state:InPPlan[]=[], action: InPActions.Actions){
  switch(action.type){
    case InPActions.ADD_INP:
      return[action.payload];
    case InPActions.CLEAR_INP:
      return [];
    default:
      return state;
  }
}
