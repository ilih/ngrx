import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../reducers/counter';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
  reset() {
    this.store.dispatch({ type: RESET });
  }

  ngOnInit() {
  }

}
