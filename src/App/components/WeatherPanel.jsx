import React, { Component } from 'react';
import WeatherItem from './WeatherItem';


const componentStyles = {
  panelContainer: {
    // display: 'flex',
    border: '1px solid green',
    // justifyContent: 'space-between',
    height: '100%',
    width: '50%',
    // flexGrow: '1',
    // marginLeft: '15px',
    paddingLeft: '15px',
    // flexWrap: 'wrap',
    // overflow: 'scroll'
  },
  panelWrapper: {
    display: 'flex',
    border: '1px solid red',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    flexGrow: '1',
    // margin: '15px',
    // padding: '15px',
    flexWrap: 'wrap',
    overflow: 'scroll'
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
    day: 'Monday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Monday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Monday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Monday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
  {
    day: 'Monday',
    hi: '72',
    low: '60',
    description: 'partly cloudy',
  },
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
    weatherData.map((data, index) =>
      <WeatherItem data={data} index={index} />);

  render() {
    return (
      <div style={componentStyles.panelContainer}>
        <div style={componentStyles.panelWrapper}>
          {this.renderWeatherItems(testWeatherData)}
        </div>
      </div>
    );
  }
}

export default WeatherPanel;
