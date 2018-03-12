import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
// import Control from 'react-leaflet-control';
import mapKey from '../../../keys';
import statesData from '../../../data/us_states';

const terrainMap = `https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=${mapKey}`;
const mapBoxAttr = 'Map tiles by <a href="http://mapbox.com">MapBox</a>';
const mapCenter = [37.744, -119.599];
const zoomLevel = 6;

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }


  render() {
    function showCA(feature) {
      return feature.properties.name === 'California';
    }

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
          <GeoJSON data={statesData} filter={showCA} />
        </Map>
      </div>
    );
  }
}

export default App;
