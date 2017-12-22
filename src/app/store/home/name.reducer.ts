import { Action } from '@ngrx/store';
import * as con from './constants';

export function nameReducer(state: string = 'igor ilikh', action: Action) {
  switch (action.type) {
    case con.SETNAME:
      return state = 'name';
    case con.RESETNAME:
      return state = '';
    default:
      return state;
  }
}
