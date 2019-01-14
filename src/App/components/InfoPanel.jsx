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
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    flexGrow: '1',
    // margin: '15px',
    // padding: '15px',
    // flexWrap: 'wrap',
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

class InfoPanel extends Component {
  mapDataToPanels = (data) => {
    const { handleWeatherItemClick } = this.props;
    if (data) {
      return data.map((itemData, index) =>
        <WeatherItem data={itemData} index={index} handleWeatherItemClick={handleWeatherItemClick}/>);
    }
  }

  renderAreaInfo = (area) => {
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {area.name}
      </div>
    );
  }

  handleWeatherItemClick = () => {
    this.props.handleWeatherItemClick();
  }

  render() {
    const { selectedState, selectedClimbingArea, statesData } = this.props;
    let content;
    if (selectedState && !selectedClimbingArea) {
      const currentState = statesData.find(state => state.properties.name === selectedState.properties.name);
      const climbingAreas = currentState.properties.climbingAreas;
      content = this.mapDataToPanels(climbingAreas);
    } else if (selectedClimbingArea) {
      content = this.renderAreaInfo(selectedClimbingArea);
    }
    // TODO: wire with actual weather data
    // dataToRender = some data returned from API

    return (
      <div style={componentStyles.panelContainer}>
        <div style={componentStyles.panelWrapper}>
          {content}
        </div>
      </div>
    );
  }
}

export default InfoPanel;
