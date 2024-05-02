import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const Map = () => {

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

  const position: LatLngTuple = [18.93, -156.21];
  // const map = L.map('map')
  // L.marker(position).addTo(map);
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
        <Marker position={[18.93, -156.21]}>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
