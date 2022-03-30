import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
//import ModalDialog from "../../Components/ModalDialog";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import "./SignUp.css";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../../server/config/firebase-config";
import { Link } from "react-router-dom";

//Pop up the sign up component when clicked, close otherwise
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(10),
    backgroundColor: "white",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
      width: "300px",
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="SignUp">
      <form className={classes.root}>
        <h className="title">PROACTIVATE.</h>
         <TextField
          label="Username"
          variant="outlined"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />


        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <div>
          <Button onClick={register} className="button1" type="submit" variant="contained">
            Sign Up
          </Button>


          <p className="logRout">
            {" "}
            Already have an account?
            <Link className="logRout_b" to="/Login">
              {" "}
              Log-In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
