import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default function Map() {


  const position = [51.05, -0.09]


  return (
    <div className={styles.mapContainer}>
      <MapContainer className={styles.map} center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
        <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
    </MapContainer>
        
    </div>
  )
}













// import { useSearchParams, useNavigate } from 'react-router-dom'

// const navigate = useNavigate()

// const [searchParams, setSearchParams]  = useSearchParams();

// const lat = searchParams.get("lat");
// const lng = searchParams.get("lng")

{/* <h1>Map</h1>
        <h3>Latitude: {lat}</h3>
        <h3>Longitude: {lng}</h3>
        <button onClick={()=> setSearchParams({
          lat : 23,
          lng : 50,
        })}>SEARCH LOCATION</button> */}