// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/toArray';
// import { Database } from '@ngrx/db';

// import { defer } from 'rxjs/observable/defer';
// import { of } from 'rxjs/observable/of';

// import * as collection from '../actions/collection';
// import { Book } from '../models/book';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherEffects {

  // @Effect({ dispatch: false })
  // openDB$: Observable<any> = defer(() => {
  //   return this.db.open('books_app');
  // });
  //
  // @Effect()
  // loadWeather$: Observable<Action> = this.actions$
  //   .ofType(collection.LOAD)
  //   .startWith(new collection.LoadAction())
  //   .switchMap(() =>
  //     this.db.query('books')
  //       .toArray()
  //       .map((books: Book[]) => new collection.LoadSuccessAction(books))
  //       .catch(error => of(new collection.LoadFailAction(error)))
  //   );

  constructor(
    private http: Http,
    private actions$: Actions
  ) { }
}
