import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Map, TileLayer, GeoJSON, Marker, Tooltip } from 'react-leaflet';
// import Control from 'react-leaflet-control';
import mapKey from '../../../keys';

const terrainMap = `https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=${mapKey}`;
const mapBoxAttr = 'Map tiles by <a href="http://mapbox.com">MapBox</a>';

export class WeatherMap extends Component {
  showToolTips = () => {
    const { selectedState } = this.props;

    if (selectedState && selectedState.properties.climbingAreas) {
      return selectedState.properties.climbingAreas.map((area, index) => (
        <Marker key={`marker-${index}`} position={area.location}>
          <Tooltip>
            <div>{area.name}</div>
          </Tooltip>
        </Marker>
      ));
    }
    return (null);
  }

  showSelectedState = (feature) =>
    this.props.selectedState !== null && feature.properties.name === this.props.selectedState.properties.name;

  handleRef = (ref) => {
    this.leafletMap = ref;
  }

  render() {
    const { mapCenter, zoomLevel, selectedState } = this.props;
    const name = selectedState !== null ? selectedState.name : 'all';
    return (
      <div>
        <Map
          ref={this.handleRef}
          center={mapCenter}
          zoom={zoomLevel}
        >
          <TileLayer
            attribution={mapBoxAttr}
            url={terrainMap}
            zIndex={1}
          />
          <GeoJSON
            key={name}
            data={this.props.statesData}
            filter={this.showSelectedState}
          />
          {
            this.showToolTips()
          }
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
  selectedState: PropTypes.object,
  mapCenter: PropTypes.array.isRequired,
  zoomLevel: PropTypes.number.isRequired,
};
