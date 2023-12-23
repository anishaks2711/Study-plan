import { SelectedMonth } from '../models/course.model';
import * as SelectedMonthActions from '../actions/selectedmonth.action';

const initialState: SelectedMonth = {
    month :'January'
  }

  export function SelectedMonthReducer(state:SelectedMonth={month:''}, action: SelectedMonthActions.Actions){
    switch(action.type){
      case SelectedMonthActions.ADD_SMONTH:
        var t=action.payload
        return t;
      default:
        return state;
    }
  }