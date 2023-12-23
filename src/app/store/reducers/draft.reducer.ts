import { DraftPlan } from '../models/course.model';
import * as DraftActions from '../actions/draft.action';
import { InitialState } from '@ngrx/store/src/models';

const initialState: DraftPlan = {
    month: 'January',
    courses_count: 0
}

export function DraftReducer(state:DraftPlan[]=[], action: DraftActions.Actions){
  switch(action.type){
    case DraftActions.ADD_DRAFT:
      return[...state,action.payload];
    case DraftActions.REMOVE_DRAFT:
      console.log(action.payload);
      const i=state.findIndex(x => x.month === action.payload);
      var copy=Array.from(state);
      copy.splice(i,1);
      return copy;
    default:
      return state;
  }
}
