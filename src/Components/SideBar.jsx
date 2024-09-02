import AppNav from "../Components/AppNav"
import Logo from "../Components/Logo"


import styles from "../Components/SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
     <Logo />
     <AppNav />
     <p>List of Cities</p>
     <footer className={styles.footer}>
        &copy; 2024
      </footer>
      
    </div>
    
  )
}
