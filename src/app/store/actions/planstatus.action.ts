import { Action } from '@ngrx/store';
import { PlanStatus } from '../models/course.model';

export const ADD_STATUS = '[STATUS] Add'
export const REMOVE_STATUS = '[STATUS] Remove'

export class AddStatus implements Action {
  readonly type = ADD_STATUS

  constructor(public payload: PlanStatus) {}
}

export class RemoveStatus implements Action {
  readonly type = REMOVE_STATUS

  constructor(public payload: string) {}
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = AddStatus |  RemoveStatus | Test