import { Action } from '@ngrx/store';
import { start_month } from '../models/course.model';

export const ADD_MONTH = '[MONTH] Add'

export class AddMonth implements Action {
  readonly type = ADD_MONTH

  constructor(public payload: start_month) {}
}

export class Test implements Action {
    readonly type='[TEXT]'
  }
  
export type Actions = AddMonth | Test