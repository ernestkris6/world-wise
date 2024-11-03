import Spinner from "../Components/Spinner";
import Message from "../Components/Message";
import CityItem from "../Components/CityItem";
import styles from './CityList.module.css'
import { useCities } from "../Contexts/CitiesContext";


export default function CityList() {

    const {cities, isLoading} = useCities();
 
    if(isLoading) return <Spinner />;

    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>
 
    return( <ul className={styles.cityList}>
                {cities.map((city)=> (
                    <CityItem city={city} key={city.id}/>
                ))}
            </ul >
  )
}
 