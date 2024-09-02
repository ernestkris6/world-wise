import styles from "./Logo.module.css";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Logo() {
  return <Link to='/'>
        <img src={logo} alt="WorldWise logo" className={styles.logo} />
  </Link>;
}

// 08138942926
// 09070783690

export default Logo;