import React, { useState, useEffect, Dispatch } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl } from 'react-map-gl';

const Button = ({
  showGlobe,
  setShowGlobe,
}: {
  showGlobe: boolean;
  setShowGlobe: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className='absolute -top-14 right-2'>
      <button
        className='w-28 px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginWhite border border-ginBlack bg-ginBlack rounded-xl'
        onClick={() => setShowGlobe((prevState) => !prevState)}
      >
        {showGlobe ? 'Show Map' : 'Show Globe'}
      </button>
    </div>
  );
};

const MapContainer = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  const [zoom, setZoom] = useState(1);

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
  ];

  useEffect(() => {
    if (showGlobe === true) {
      setZoom(2);
    } else if (showGlobe === false) {
      setZoom(1);
    }
  }, [showGlobe]);

  return (
    <div className='relative'>
      <Map
        key={showGlobe ? 'outdoor' : 'street'}
        mapboxAccessToken={accessToken}
        initialViewState={{
          latitude: -1.189,
          longitude: -123.01,
          zoom: zoom,
        }}
        style={{ width: '100%', height: 400, borderRadius: '0 0.5rem' }}
        mapStyle={
          showGlobe
            ? 'mapbox://styles/mapbox/outdoors-v12'
            : 'mapbox://styles/mapbox/streets-v9'
        }
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
      <Button showGlobe={showGlobe} setShowGlobe={setShowGlobe} />
    </div>
  );
};

export default MapContainer;
