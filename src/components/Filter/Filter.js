import { useSelector, useDispatch } from "react-redux";
import { allActions, allSelectors } from "redux/phonebook";

import styles from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(allSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => dispatch(allActions.filterUpdate(e.target.value));

  return (
    <label className={styles.Filter}>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;
