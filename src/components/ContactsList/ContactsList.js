import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { allOperations, allSelectors } from "redux/phonebook";

import styles from "./ContactsList.module.scss";

const ContactsList = () => {
  const filterEl = useSelector(allSelectors.getVisibleContacts);
  const loading = useSelector(allSelectors.getLoading);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(allOperations.deleteContact(id));

  return (
    <ul className={styles.List}>
      {loading && (
        <div className={styles.Loader}>
          <Loader type="Puff" color="#3f51b5" width={50} />
        </div>
      )}
      {filterEl &&
        filterEl.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              className={styles.Btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
