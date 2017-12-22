import { Action } from '@ngrx/store';
import * as con from './constants';

export class EditText implements Action {
  readonly type = con.EDIT_TEXT;

  constructor(public payload: string) {}
}

export class Like implements Action {
  readonly type = con.LIKE;
}

export class Dislike implements Action {
  readonly type = con.DISLIKE;
}

export class Postreset implements Action {
  readonly type = con.POSTRESET;
}

export type All = EditText | Like | Dislike | Postreset;
