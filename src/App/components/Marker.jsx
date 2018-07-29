import React from 'react';
import { Marker } from 'react-leaflet';

export class CustomMarker extends Marker {
    componentDidMount () {
        super.componentDidMount();
        this.leafletElement.openPopup();
    }
}
