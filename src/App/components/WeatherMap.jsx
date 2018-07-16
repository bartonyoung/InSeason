import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Map, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import mapKey from '../../../keys';

const terrainMap = `https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=${mapKey}`;
const mapBoxAttr = 'Map tiles by <a href="http://mapbox.com">MapBox</a>';
const componentStyles = {
  mapStyles: {
    border: '1px solid red',
  },
};


export class WeatherMap extends Component {
  markers = [];

  handleMouseOver = (index, area) => {
    const content = this.popUp(area);

    this.markers[index].leafletElement
      .bindPopup(content)
      .openPopup();
  };

  popupData = () => (
    <p>This is the data</p>
  );

  renderMarkers = () => {
    const { selectedState } = this.props;

    if (selectedState && selectedState.properties.climbingAreas) {
      return selectedState.properties.climbingAreas.map((area, index) => (
        <Marker
          title={area.name}
          key={`marker-${area.name}`}
          ref={(ref) => { this.markers[index] = ref; }}
          position={area.location}
          onBlur
          onFocus
        >
          <Popup>
            {this.popupData()}
          </Popup>
        </Marker>
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
      <div style={componentStyles.mapStyles}>
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
            this.renderMarkers()
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
