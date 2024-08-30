// import AppNav from '../Components/AppNav'
import styles from "./AppLayout.module.css"
import SideBar from "./SideBar"

export default function AppLayout() {
  return (
    <div className={styles.app}>
     <h1>App Section</h1>
     <SideBar />
    
    </div>
  )
}
