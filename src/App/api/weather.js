import { weatherKey } from '../../../keys';

const fetchWeatherData = async (lat, lon, duration) => {
  // const durationMap = {
  //   1: ''
  // };
  // fetch(`api.openweathermap.org/data/2.5/${duration === 1 ? 'weather' : 'forecast'}?lat=${lat}&lon=${long}${duration === 1 ? null : `&cnt=${duration}`}&APPID=${weatherKey};`)
  //   .then(weatherData => {
  //     console.log(weatherData);
  //   })
  //   .catch(err => console.error(err));
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${duration}&APPID=${weatherKey}`;
  return fetch(url)
    .then((response) => {
      const result = response.json();
      return result;
    });
};

export default fetchWeatherData;


// current weather call: `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${weatherKey}`

// 5 day weather call: `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${weatherKey}`

// long term call:
// API call:
// `api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&APPID=${weatherKey}`

// Parameters:
// lat, lon coordinates of the location of your interest
// cnt number of days returned (from 1 to 16)
