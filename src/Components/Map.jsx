import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'


export default function Map() {

  const [searchParams, setSearchParams]  = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng")

  return (
    <div className={styles.mapContainer}>
        <h1>Map</h1>
        <h3>Latitude: {lat}</h3>
        <h3>Longitude: {lng}</h3>
    </div>
  )
}
