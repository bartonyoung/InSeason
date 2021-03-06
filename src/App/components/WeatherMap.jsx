import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { CustomMarker as Marker } from '../components/Marker';
import { 
  Map, 
  TileLayer, 
  GeoJSON, 
  Marker, 
  Popup, 
  // Tooltip 
} from 'react-leaflet';
import { mapKey } from '../../../keys';

const terrainMap = `https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=${mapKey}`;
const mapBoxAttr = 'Map tiles by <a href="http://mapbox.com">MapBox</a>';
const componentStyles = {
  mapStyles: {
    border: '1px solid red',
    height: '100%',
    // flexGrow: 1,
    width: '100%',
  },
};


export class WeatherMap extends Component {
  markers = [];

  popupData = (area) => {    
    return (
      <a href="javascript:void(0);" onClick={() => this.handlePopUpClick(area) }>{area.name}</a>
    );
  }
  
  handlePopUpClick = (area) => {
    const lat = area.location[0],
      long = area.location[1];

    this.props.setSelectedClimbingArea(area);
    this.props.getWeatherData(lat, long, 5);
  }
    
  getAllClimbingAreas = (statesData) => {
    const dataArr = statesData.features.filter((f) => {
      if (f.properties.climbingAreas) {
        return f.properties.climbingAreas;
      }
    });

    return dataArr.map((p) => p.properties.climbingAreas).flat();
  }

  renderMarkers = () => {
    const { selectedState, statesData } = this.props;
    const climbingAreas = selectedState ? selectedState.properties.climbingAreas : this.getAllClimbingAreas(statesData);
      
    
    return climbingAreas.map((area, index) => (
      <Marker
        key={`marker-${area.name}`}
        ref={(ref) => { this.markers[index] = ref; }}
        position={area.location}
        onBlur
        onFocus
      >
        <Popup
          autoClose={true}
          closeOnClick={false}
        >
          {this.popupData(area)}
        </Popup>
      </Marker>
    ));
  }

  showStateOutline = (feature) => {
    const state = this.props.selectedState !== null && feature.properties.name === this.props.selectedState.properties.name;
    return state;
  }

  handleRef = (ref) => {
    this.leafletMap = ref;
  }

  render() {
    const { mapCenter, zoomLevel, selectedState } = this.props;
    const name = selectedState !== null ? selectedState.properties.name : 'all';
    const wide = selectedState ? false : true;

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
            filter={this.showStateOutline}
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
