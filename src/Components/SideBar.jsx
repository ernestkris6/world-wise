import AppNav from "../Components/AppNav"
import Logo from "../Components/Logo"

import styles from "../Components/SideBar.module.css";
import Footer from "./Footer";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
     <Logo />
     <AppNav />
     <p>List of Cities</p>


     <Footer />
      
    </div>
    
  )
}
