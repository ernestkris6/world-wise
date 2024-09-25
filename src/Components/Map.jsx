import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, 
  TileLayer, 
  Marker, 
  Popup, 
  useMap, 
  useMapEvents 
} from 'react-leaflet'
import { useCities } from '../Contexts/CitiesContext';
import { useGeolocation } from '../hooks/useGeoLocation';
import Button from '../Components/Button';



export default function Map() {

  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0])
  const [searchParams]  = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  //N.B: useEffect is a sycn mechanism. 
  //It helped us to recall the lat and lng after the initial component dies.

  useEffect(function() {
     if(mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng])


  useEffect(function(){
      if(geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
  }, [geolocationPosition])


  return (
    <div className={styles.mapContainer}>
    {!geolocationPosition && (<Button type="position" onClick={getPosition}>
      {isLoadingPosition ? "LOADING POSITION..." : "USE YOUR POSITION"}
    </Button>)}

    <MapContainer 
      className={styles.map} 
      center={mapPosition} 
      // center={[mapLat, mapLng]}
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

    <ChangeCenter position={mapPosition} />
    <DetectClick /> 

    </MapContainer>

    
        
    </div> 
  )
}


function ChangeCenter({position}){

  const map = useMap()
  map.setView(position)
  return null;
}

function DetectClick(){

  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      // console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    }
      
  })
}























{/* <h1>Map</h1>
        <h3>Latitude: {lat}</h3>
        <h3>Longitude: {lng}</h3>
        <button onClick={()=> setSearchParams({
          lat : 23,
          lng : 50,
        })}>SEARCH LOCATION</button> */}