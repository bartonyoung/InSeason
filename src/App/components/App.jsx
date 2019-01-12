import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { WeatherMap } from './WeatherMap';
import NavBar from './NavBar';
import WeatherPanel from './WeatherPanel';
import fetchWeatherData from '../api/weather';

const componentStyles = {
  appContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '15px',
    border: 'blue solid 1px',
  },
};

class App extends PureComponent {
  state = {
    selectedState: null,
    selectedClimbingArea: null,
    weatherData: null,
    error: null,
    mapCenter: [39.8283, -98.5795],
    zoomLevel: 4.5,
  };

  getStateData = (selectedState) => {
    const usStates = this.props.statesData.features;
    const foundState = usStates.find((obj) => {
      if (obj.properties.name === selectedState) {
        return obj;
      }
      return null;
    });

    return foundState;
  }

  setSelectedClimbingArea = (area) => {
    this.setState({
      selectedClimbingArea: area.name  
    })
  };

  getWeatherData = async (lat, lon, duration) => {
    // fetchWeatherData(lat, lon, duration)
    //   .then(data =>
    //     this.setState({ weatherData: data }))
    // TODO: handle errors appropriately
    //   .catch(error => this.setState({ error }));
    const weatherData = await fetchWeatherData(lat, lon, duration);
    console.log(weatherData)
    return weatherData;
  };

  handleStateSelection = (event) => {
    const stateName = event.target.value;
    const selectedState = this.getStateData(stateName);

    this.setState({
      selectedState,
      zoomLevel: selectedState ? 6 : 4.5,
      mapCenter: selectedState ? selectedState.properties.mapCenter : [39.8283, -98.5795],
    });
  }

  renderWeatherPanel = () => {
    return this.state.selectedState ?
      (
        <WeatherPanel 
            selectedState={this.state.selectedState}
            selectedClimbingArea={this.state.selectedClimbingArea}
            statesData={this.props.statesData.features}
          />
      )
      :
      null
  }

  render() {
    return (
      <div style={componentStyles.appContainer}>
        <NavBar handleStateSelection={this.handleStateSelection} />
        <div>
          <form>
              Select a state:
            <select id="state-selector" onChange={this.handleStateSelection}>
              <option value="all" defaultValue="selected">Show all</option>
              <option value="California">California</option>
              <option value="Wyoming">Wyoming</option>
            </select>
          </form>
        </div>
        <div style={componentStyles.contentContainer}>
          <WeatherMap
            key={this.state.selectedState}
            mapCenter={this.state.mapCenter}
            zoomLevel={this.state.zoomLevel}
            selectedState={this.state.selectedState}
            statesData={this.props.statesData}
            getWeatherData={this.getWeatherData}
          />
          {
            this.renderWeatherPanel()
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  statesData: PropTypes.object.isRequired,
};
export default App;
