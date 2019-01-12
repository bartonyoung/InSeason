import React from 'react';
import { Marker } from 'react-leaflet';

export class CustomMarker extends Marker {
    componentWillMount () {
        super.componentWillMount();
    }

    componentDidMount () {
        super.componentDidMount();
        this.leafletElement.openPopup();
    }

    componentWillUnmount () {
        super.componentWillUnmount();
        this.leafletElement.closePopup();
    }
}
