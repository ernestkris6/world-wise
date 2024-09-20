import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useCities } from '../Contexts/CitiesContext'



export default function Map() {

  const navigate = useNavigate();

  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0])
  
  const [searchParams, setSearchParams]  = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");


  return (
    <div className={styles.mapContainer}>
      
    <MapContainer 
      className={styles.map} 
      // center={mapPosition} 
      center={[mapLat || 40, mapLng || 0]}
      zoom={6} 
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

    {/* <ChangeCenter position={[mapLat || 40, mapLng || 0]} /> */}
    {/* <Markers />  */}
        
    </div> 
  )
}


// function ChangeCenter({position}){

//   const map = useMap()
//   map.setView(position)
//   return null;
// }

// function Markers(){
//   return(
//     <div></div>
//   )
// }





// import { useSearchParams, useNavigate } from 'react-router-dom'

// const navigate = useNavigate()



{/* <h1>Map</h1>
        <h3>Latitude: {lat}</h3>
        <h3>Longitude: {lng}</h3>
        <button onClick={()=> setSearchParams({
          lat : 23,
          lng : 50,
        })}>SEARCH LOCATION</button> */}