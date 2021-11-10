import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import * as locations from './data/locations.json';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja2ZhZGRpcyIsImEiOiJja3Vwemt0amwwbnVoMnZwZ2dreW81OTQwIn0.qerYpAFHJUlYynqbympvAA';


const MapContainer = () => {
    const mapContainer = useRef(null);
   
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/nickfaddis/ckurogok00w1l18mmby6l9zsf',
        center: [-90.230022, 38.634724],
        zoom: 15
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        locations.features.forEach(element => {
        const marker = new mapboxgl.Marker()
        .setLngLat(element.geometry.coordinates)
        .addTo(map);
        });

        //TODO: Create radio button to change between labeled and non-labeled styles
        //map.setStyle('mapbox://styles/mapbox/outdoors-v11');

        return () => map.remove();
    }, []);

    return <div className="map-container" ref={ mapContainer } />;
}

export default MapContainer;