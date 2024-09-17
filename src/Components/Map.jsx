import { useState } from 'react'
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useCities } from '../Contexts/CitiesContext'
import { useSearchParams } from 'react-router-dom';


export default function Map() {

  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([51.05, -0.09])
  
const [searchParams, setSearchParams]  = useSearchParams();

const mapLat = searchParams.get("lat");
const mapLng = searchParams.get("lng")
 
  

  return (
    <div className={styles.mapContainer}>
      <MapContainer 
      className={styles.map} 
      center={[mapLat, mapLng]} 
      zoom={13} 
      scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
        {cities.map((city)=>(
          <Marker 
            position={[city.position.lat, city.position.lng]} key={city.id}
          >
        <Popup>
          <span>{city.emoji}</span> <span>{city.cityName}</span>
        </Popup>
        </Marker>))}
    </MapContainer>
        
    </div>
  )
}













// import { useSearchParams, useNavigate } from 'react-router-dom'

// const navigate = useNavigate()



{/* <h1>Map</h1>
        <h3>Latitude: {lat}</h3>
        <h3>Longitude: {lng}</h3>
        <button onClick={()=> setSearchParams({
          lat : 23,
          lng : 50,
        })}>SEARCH LOCATION</button> */}