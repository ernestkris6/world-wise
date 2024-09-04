import { useSearchParams, useNavigate } from 'react-router-dom'
import styles from './Map.module.css'


export default function Map() {

  const navigate = useNavigate()

  const [searchParams, setSearchParams]  = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng")

  return (
    <div className={styles.mapContainer} onClick={()=> navigate("form")}>
        <h1>Map</h1>
        <h3>Latitude: {lat}</h3>
        <h3>Longitude: {lng}</h3>
        <button onClick={()=> setSearchParams({
          lat : 23,
          lng : 50,
        })}>SEARCH LOCATION</button>
    </div>
  )
}
