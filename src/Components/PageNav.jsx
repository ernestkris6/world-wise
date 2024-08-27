import { NavLink } from "react-router-dom";

import styles from './PageNav.modules.css'

export default function PageNav() {
  return (
    <nav style={styles}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}
