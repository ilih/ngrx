import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AllUserData} from '../../../shared/to/all-user-data';
import {Http} from '@angular/http';

@Injectable()
export class ThreadService {

  constructor(private http: Http) { }

  loadUserThread(): Observable<AllUserData> {
    return this.http.get('/api/threads')
      .map(res => res.json());
  }

}
