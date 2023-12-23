import { Action } from '@ngrx/store';
import { ClosedPlan } from '../models/course.model';

export const ADD_CLOSED = '[CLOSED] Add'
export const REMOVE_CLOSED = '[CLOSED] Remove'

export class AddClosed implements Action {
  readonly type = ADD_CLOSED

  constructor(public payload: ClosedPlan) {}
}

export class RemoveClosed implements Action {
  readonly type = REMOVE_CLOSED

  constructor(public payload: string) {}
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = AddClosed | RemoveClosed| Test