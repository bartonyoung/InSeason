import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
// import Control from 'react-leaflet-control';
import mapKey from '../../../keys';
// import statesData from '../../../data/us_states';

const terrainMap = `https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=${mapKey}`;
const mapBoxAttr = 'Map tiles by <a href="http://mapbox.com">MapBox</a>';
const mapCenter = [37.744, -119.599];
const zoomLevel = 6;

export class WeatherMap extends Component {
  showSelectedState = (feature) => feature.properties.name === this.props.selectedState

  render() {
    return (
      <div>
        <Map
          center={mapCenter}
          zoom={zoomLevel}
        >
          <TileLayer
            attribution={mapBoxAttr}
            url={terrainMap}
          />
          <GeoJSON
            key={this.props.selectedState}
            data={this.props.statesData}
            filter={this.showSelectedState}
          />
        </Map>
      </div>
    );
  }
}

WeatherMap.defaultProps = {
  selectedState: null,
};

WeatherMap.propTypes = {
  statesData: PropTypes.object.isRequired,
  selectedState: PropTypes.string,
};
