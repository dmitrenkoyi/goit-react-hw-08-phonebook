import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function AuthNav() {
  return (
    <nav>
      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </nav>
  );
}
