import { Action } from '@ngrx/store';
import { DraftPlan } from '../models/course.model';

export const ADD_DRAFT = '[DRAFT] Add'
export const REMOVE_DRAFT = '[DRAFT] Remove'

export class AddDraft implements Action {
  readonly type = ADD_DRAFT

  constructor(public payload: DraftPlan) {}
}

export class RemoveDraft implements Action {
  readonly type = REMOVE_DRAFT

  constructor(public payload: string) {}
}

export class Test implements Action {
  readonly type='[TEXT]'
}

export type Actions = AddDraft | RemoveDraft | Test