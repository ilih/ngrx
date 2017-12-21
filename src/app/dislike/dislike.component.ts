import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { DECREMENT } from '../reducers/counter';
// import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.scss']
})
export class DislikeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  dec() {
    this.store.dispatch({ type: DECREMENT });
  }

  ngOnInit() {
  }

}
