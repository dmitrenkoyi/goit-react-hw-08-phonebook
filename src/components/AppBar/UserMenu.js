import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "redux/auth";
import { authOperations } from "redux/auth";

import styles from "./Navigation.module.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {userName}</span>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sing out
      </button>
    </div>
  );
}
