import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const styles = {
  form: {
    width: 320,
    marginLeft: "auto",
    marginTop: "100px",
    marginRight: "auto",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          style={styles.label}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoFocus
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          style={styles.label}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Enter
        </Button>
      </form>
    </div>
  );
}