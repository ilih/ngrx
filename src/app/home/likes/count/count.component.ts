import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SETNAME, RESETNAME } from '../../../store/home/constants';
import { Post } from '../../../model/post';
import * as PostActions from '../../../store/home/post.actions';

interface AppState {
  counter: number;
  username: string;
  post: Post;
}

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  counter: Observable<number>;
  username$: Observable<string>;
  post$: Observable<Post>;
  inputText: string;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
    this.username$ = store.select('username');
    this.post$ = store.select('post');
  }

  editTitle() {
    this.store.dispatch(new PostActions.EditText(this.inputText));
  }

  like() {
    this.store.dispatch(new PostActions.Like());
  }

  dislike() {
    this.store.dispatch(new PostActions.Dislike());
  }

  resetPost() {
    this.store.dispatch(new PostActions.Postreset());
  }

  setName() {
    this.store.dispatch({ type: SETNAME });
  }

  resetName() {
    this.store.dispatch({ type: RESETNAME });
  }

  ngOnInit() {
  }

}
