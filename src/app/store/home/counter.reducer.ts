import { Action } from '@ngrx/store';
import * as con from './constants';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case con.INCREMENT:
      return state + 1;
    case con.DECREMENT:
      return state - 1;
    case con.RESET:
      return 0;
    default:
      return state;
  }
}
