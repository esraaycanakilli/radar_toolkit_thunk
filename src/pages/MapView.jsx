
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
  } from 'react-leaflet';
  import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux';

const MapView = ({openModal}) => {

  const store=useSelector(store=>store)
  console.log(store)
  return (
    <div>
        <MapContainer
        center={[38.728587, 35.173275]}
        zoom={6}
        scrollWheelZoom={true}
      >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  {store.flights.map((f)=>(
 <Marker  key={f.id} position={[f.lat,f.lng]}>
 <Popup>
   <div className='popup'>
    <span>Kod:{f.code}</span>
    <button onClick={()=>openModal(f.id)}>Detay</button>
   </div>
 </Popup>
</Marker>
  ))}
  
</MapContainer>
    </div>
  )
}

export default MapView