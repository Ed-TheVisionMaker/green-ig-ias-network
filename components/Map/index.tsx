import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl } from 'react-map-gl';

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
    {
      country: `Hawai'i`,
      lat: 19.5938015,
      lng: -155.4283701,
    },
    {
      country: 'Fiji',
      lat: -18.1239696,
      lng: 179.0122737,
    },
    {
      country: 'Ishigaki Island(Japan)',
      lat: 24.3618503,
      lng: 124.1543424,
    },
    {
      country: 'Puerto Rico',
      lat: 18.220833,
      lng: -66.590149,
    },
  ];
  return (
    <div className=''>
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
          latitude: -1.189,
          longitude: -123.01,
          zoom: 1,
        }}
        style={{ width: '100%', height: 400, borderRadius: '0 0.5rem' }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        // mapStyle='mapbox://styles/mapbox/outdoors-v12'
      >
        {marker.map((location) => (
          <Marker
            key={location.country}
            latitude={location.lat}
            longitude={location.lng}
          />
        ))}
        <NavigationControl position='top-right' />
      </Map>
    </div>
  );
};

export default MapContainer;
