import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import { authSelectors } from "redux/auth";

import styles from "./Navigation.module.scss";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getRefreshing);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn && !isRefreshing ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
