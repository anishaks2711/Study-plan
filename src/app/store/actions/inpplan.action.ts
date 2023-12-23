import { Action } from '@ngrx/store';
import { InPPlan } from '../models/course.model';

export const ADD_INP = '[INP] Add'
export const CLEAR_INP = '[INP] Remove'

export class AddInP implements Action {
  readonly type = ADD_INP

  constructor(public payload: InPPlan) {}
}

export class ClearInP implements Action {
  readonly type = CLEAR_INP
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = AddInP | ClearInP | Test