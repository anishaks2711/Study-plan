import { Action } from '@ngrx/store';
import { SelectedMonth } from '../models/course.model';

export const ADD_SMONTH = '[MONTH] Add'

export class AddSMonth implements Action {
  readonly type = ADD_SMONTH

  constructor(public payload: SelectedMonth) {}
}

export class Test implements Action {
    readonly type='[TEXT]'
  }
  
export type Actions = AddSMonth | Test