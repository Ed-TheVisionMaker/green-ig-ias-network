import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {

  const position: LatLngTuple = [18.93, -156.21];

  return (
    <div className='border border-black h-96 rounded-b-md overlfow-hidden'>
      <MapContainer
        center={position}
        zoom={3}
        scrollWheelZoom={false}
        style={{
          height: '100%',
          overflow: 'hidden',
          borderRadius: '0 0 0.5rem 0.5rem',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> contributors'
          url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=zoBYEaf9iKegUyid6yDl'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
