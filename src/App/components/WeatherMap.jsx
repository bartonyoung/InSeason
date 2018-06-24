import React, { Component } from 'react';
import ReactDOM, { render as renderChild } from 'react-dom';
import { PropTypes } from 'prop-types';
import { Map, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
// import Control from 'react-leaflet-control';
import mapKey from '../../../keys';

const terrainMap = `https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=${mapKey}`;
const mapBoxAttr = 'Map tiles by <a href="http://mapbox.com">MapBox</a>';

export class WeatherMap extends Component {
  constructor() {
    super();

    this.markers = [];
  }

  handleMouseOver = (index, area) => {
    // this.markers[index].leafletElement
    //   .bindPopup(`<div class="flex"><p><strong>${area.name}</strong></p><p>${area.description}</p><a href="">More...</a></div>`)
    //   .openPopup();
    const markerElement = ReactDOM.findDOMNode(this.markers[index].leafletElement);

    renderChild(<Popup />, markerElement);
  };

  showToolTips = () => {
    const { selectedState } = this.props;

    if (selectedState && selectedState.properties.climbingAreas) {
      return selectedState.properties.climbingAreas.map((area, index) => (
        <Marker
          key={`marker-${area.name}`}
          ref={(ref) => { this.markers[index] = ref; }}
          position={area.location}
          onMouseOver={() => this.handleMouseOver(index, area)}
          onFocus
        />
      ));
    }
    return (null);
  }

  showSelectedState = (feature) => {
    const state = this.props.selectedState !== null && feature.properties.name === this.props.selectedState.properties.name;
    return state;
  }

  handleRef = (ref) => {
    this.leafletMap = ref;
  }

  render() {
    const { mapCenter, zoomLevel, selectedState } = this.props;
    const name = selectedState !== null ? selectedState.properties.name : 'all';
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
