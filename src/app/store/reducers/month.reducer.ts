import { start_month } from '../models/course.model';
import * as MonthActions from '../actions/month.action';

const initialState: start_month = {
    name:'January'
  }

  export function MonthReducer(state:start_month={name:''}, action: MonthActions.Actions){
    switch(action.type){
      case MonthActions.ADD_MONTH:
        var t=action.payload
        return t;
      default:
        return state;
    }
  }
  