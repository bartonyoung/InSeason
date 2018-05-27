import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { WeatherMap } from './WeatherMap';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      selectedState: null,
    };
  }

  handleChange = (event) => {
    this.setState({ selectedState: event.target.value }, () => { console.log('handlechange', this.state); });
  }


  render() {
    console.log('in the render', this.state.selectedState);
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
