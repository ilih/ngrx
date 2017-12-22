// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/';

export const environment = {
  production: false,
  FORECAST: 'forecast',
  WEATHER: 'weather',
  OPEN_WEATHER_KEY: '?id=524901&APPID=897e2a87465ccbba4b7f6f068437bf23',
  GET_WEATHER: BASE_API_URL + 'weather?id=524901&APPID=897e2a87465ccbba4b7f6f068437bf23'
};
