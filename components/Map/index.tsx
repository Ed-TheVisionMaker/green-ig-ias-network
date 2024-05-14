import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

const MapContainer = () => {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const marker = [
    {
      country: 'CaymanIslands',
      lat: 19.313299,
      lng: -81.254601,
    },
    {
      country: 'Puerto Rico',
      lat: 18.220833,
      lng: -66.590149,
    },
  ];

  return (
    <div>
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 3,
        }}
        style={{ width: '100%', height: 400 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        {marker.map((location) => (
          <Marker
            key={location.country}
            longitude={location.lng}
            latitude={location.lat}
          />
        ))}
      </Map>
    </div>
  );
};

export default MapContainer;