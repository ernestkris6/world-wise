import Spinner from "../Components/Spinner";
import CityItem from "./CityItem";
import styles from './CityList.module.css'

export default function CityList({ cities, isLoading }) {
 
    if(isLoading) return <Spinner />;
 
    return( <ul className={styles.cityList}>
                {cities.map((city)=> (
                    <CityItem city={city} key={city.id}/>
                ))}
            </ul >
  )
}
