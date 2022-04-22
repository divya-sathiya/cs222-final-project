import React from "react";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import ModalDialog from "../../Components/ModalDialog";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import "./SignUp.css";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../../server/config/firebase-config";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

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
  const [user, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [success,setSuccess] = useState(false);
  const [redirect, setredirect] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  });
},[]);

  //Sign-up using email and password
  const register = async () => {
    try {
      const user_info = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setSuccess(true);
      localStorage.setItem("current_user_authToken", user_info.user.getIdToken);
    } catch (error) {
      alert(error.message);
    }
  };

  if (success === true) {
    return <Navigate to="/Dashboard" />;
  }
  
 
  return (
    <div className="SignUp">
      <form className={classes.root}>
        <h className="title">PROACTIVATE.</h>
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
          <Button onClick={register} className="button1" variant="contained" style={{backgroundColor:'#12565a'}} >
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
