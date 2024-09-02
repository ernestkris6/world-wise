import AppNav from "../Components/AppNav"
import Logo from "../Components/Logo"

import styles from "../Components/SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
     <Logo />
     <AppNav />
     <p>List of Cities</p>
     <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
      
    </div>
    
  )
}
