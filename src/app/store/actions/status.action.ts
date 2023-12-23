
import { Action } from '@ngrx/store';
import { SelCourse } from '../models/course.model';

export const CHECKED_COURSE = '[COURSE] Check'
export const UNCHECKED_COURSE = '[COURSE] Uncheck'
export const CLEARCHECKED_COURSE = '[COURSE] Clear'


export class CheckedCourse implements Action {
  readonly type = CHECKED_COURSE

  constructor(public payload: SelCourse) {}
}

export class UncheckedCourse implements Action {
  readonly type = UNCHECKED_COURSE

  constructor(public payload: number) {}
}

export class ClearCheckedCourse implements Action {
  readonly type = CLEARCHECKED_COURSE
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = CheckedCourse | UncheckedCourse | ClearCheckedCourse | Test