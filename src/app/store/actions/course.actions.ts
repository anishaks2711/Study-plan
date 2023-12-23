
import { Action } from '@ngrx/store';
import { SelCourse } from '../models/course.model';

export const ADD_COURSE = '[COURSE] Add'
export const REMOVE_COURSE = '[COURSE] Remove'
export const CLEAR_COURSE = '[COURSE] Clear'
export const MOVE_UP = '[COURSE] Up'
export const MOVE_DOWN= '[COURSE] Down'

export class AddCourse implements Action {
  readonly type = ADD_COURSE

  constructor(public payload: SelCourse) {}
}

export class RemoveCourse implements Action {
  readonly type = REMOVE_COURSE

  constructor(public payload: number) {}
}

export class ClearCourse implements Action{
  readonly type = CLEAR_COURSE
}

export class MoveUp implements Action {
  readonly type = MOVE_UP

  constructor(public payload: number) {}
}

export class MoveDown implements Action {
  readonly type = MOVE_DOWN

  constructor(public payload: number) {}
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = AddCourse | RemoveCourse | ClearCourse | MoveUp | MoveDown | Test