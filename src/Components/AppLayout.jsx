// import AppNav from '../Components/AppNav'
import styles from "./AppLayout.module.css"
import Map from "./Map"
import SideBar from "./SideBar";


export default function AppLayout() {
  return (
    <div className={styles.app}>
     <SideBar />
     <Map />
    
    </div>
  )
}
