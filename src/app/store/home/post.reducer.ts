import { Post } from '../../model/post';
import * as con from './constants';
import { All } from './post.actions';

export type Action = All;

// Default app state
const defaultState: Post = {
  text: 'Default title',
  likes: 0
};

// Create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {
  switch (action.type) {
    case con.EDIT_TEXT:
      return newState(state, {text: action.payload});
    case con.LIKE:
      return newState(state, {likes: state.likes + 1});
    case con.DISLIKE:
      return newState(state, {likes: state.likes - 1});
    case con.POSTRESET:
      return defaultState;
    default:
      return state;
  }
}
