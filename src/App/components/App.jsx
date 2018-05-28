import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { WeatherMap } from './WeatherMap';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      selectedState: null,
      mapCenter: [39.8283, -98.5795],
      zoomLevel: 3.75,
    };
  }

  getStateData = (selectedState) => {
    const states = this.props.statesData.features;
    const state = states.find((obj) => {
      if (!selectedState) {
        return null;
      } else if (obj.properties.name === selectedState) {
        return obj;
      }
    });
    console.log(state);
    return state;
  }

  handleChange = (event) => {
    const stateName = event.target.value;
    console.log(stateName);
    const selectedState = this.getStateData(stateName);
    console.log(selectedState);
    this.setState({
      selectedState,
      zoomLevel: selectedState ? 6 : 3.75,
      mapCenter: selectedState ? selectedState.properties.mapCenter : [39.8283, -98.5795],
    });
  }


  render() {
    return (
      <div>
        <div>
          <form>
            Select a state:
            <select id="state-selector" onChange={this.handleChange}>
              <option value="all" defaultValue="selected">Show all</option>
              <option value="California">California</option>
              <option value="Wyoming">Wyoming</option>
            </select>
          </form>
        </div>
        <WeatherMap
          mapCenter={this.state.mapCenter}
          zoomLevel={this.state.zoomLevel}
          selectedState={this.state.selectedState}
          statesData={this.props.statesData}
        />
      </div>
    );
  }
}

App.propTypes = {
  statesData: PropTypes.object.isRequired,
};
export default App;
