import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private wethService: WeatherService) { }

  ngOnInit() {
    this.wethService.getWeather().subscribe(
      (data) => this.weather = JSON.stringify(data)
    );
  }

}
