import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { DECREMENT } from '../../store/home/constants';
import {Observable} from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.scss']
})
export class DislikeComponent implements OnInit {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  dec() {
    this.store.dispatch({ type: DECREMENT });
  }

  ngOnInit() {
  }

}
