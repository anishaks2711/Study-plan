
import { Action } from '@ngrx/store';
import { Goals } from '../models/course.model';

export const ADD_GOAL = '[GOAL] Add'

export class AddGoal implements Action {
  readonly type = ADD_GOAL

  constructor(public payload: Goals) {}
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = AddGoal | Test