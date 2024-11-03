import styles from "./AppLayout.module.css"
import Map from "./Map"
import SideBar from "./SideBar";
import User from "../Components/User";


export default function AppLayout() {
  return (
    <div className={styles.app}>
      
     <SideBar />
     <Map />
     <User />
    
    </div>
  )
}
