import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'

export default function CityItem({ city }) {

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

  const {cityName, emoji, date, id, position} = city;
  console.log(position);
  
  return (
    <li> 
      <Link className={styles.cityItem} to={`${id}`}>
       <span className={styles.emoji}>{emoji}</span>
       <h3 className={styles.cityName}>{cityName}</h3>
       <time className={styles.date}>{formatDate(date)}</time>
       <button className={styles.deleteBtn}>&times;</button>
    </Link>
    </li>
   
  )
}
