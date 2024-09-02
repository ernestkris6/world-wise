import { Outlet } from "react-router-dom";
import AppNav from "../Components/AppNav"
import Logo from "../Components/Logo"

import styles from "../Components/SideBar.module.css";
import Footer from "./Footer";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
     <Logo />
     <AppNav />
     <Outlet />


     <Footer />
      
    </div>
    
  )
}
