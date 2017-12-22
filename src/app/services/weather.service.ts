import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(environment.GET_WEATHER);
  }
}
