import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allOperations, allSelectors } from "redux/phonebook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./FormContacts.module.scss";

const FormContacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const items = useSelector(allSelectors.getItems);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const coincidenceContacts = items.some((item) => item.name === name);

    if (coincidenceContacts) {
      toast.error(`${name} is already in contacts`);
      setName("");
      setNumber("");
      return;
    }

    dispatch(allOperations.addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <>
      <ToastContainer />
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.Btn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default FormContacts;
