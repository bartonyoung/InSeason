import React, { Component } from 'react';
import WeatherItem from './WeatherItem';


const componentStyles = {
  panelContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid green',
    justifyContent: 'space-between',
    height: '100%',
    flexGrow: '1',
    marginLeft: '15px',
    padding: '15px',
  },
};

const testWeatherData = [
  {
    day: 'Monday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Tuesday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Wednesday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Thursday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Friday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
];

class WeatherPanel extends Component {
  renderWeatherItems = (weatherData) =>
    weatherData.map(data =>
      <WeatherItem {...data} />);

  render() {
    return (
      <div style={componentStyles.panelContainer}>
        {this.renderWeatherItems(testWeatherData)}
      </div>
    );
  }
}

export default WeatherPanel;
