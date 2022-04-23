import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ModalDialog2 from "../../Components/ModalDialog2";
import { Divider } from "@mui/material";
import "./Login.css";
import { signInWithGoogle } from "../../../server/config/firebase-config";
import { auth } from "../../../server/config/firebase-config";
import { margin } from "@mui/system";
import { Navigate } from 'react-router-dom';

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken
} from "firebase/auth";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: theme.spacing(10),
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

const Login = () => {
  const classes = useStyles();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  const [success,setSuccess] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Sign in with email and password
  const signIn = async () => {
    try {
      const currentUser = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      var user_token = await currentUser.user.getIdToken();
      localStorage.setItem("current_user_authToken", user_token);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      alert(error.message);
      console.log(success);
    } 
  };

  
  // For google login
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:5000/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log(response);
    });
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };
  
  if (success === true) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <div className="Login">
      <form className={classes.root}>
        <h className="title2">Welcome Back</h>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          error = {success}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          error = {success}
        />
        <div>
          <Button className="button2" onClick={signIn} variant="contained" style={{backgroundColor:'#12565a'}}>
            Login
          </Button>
          <p className="paragraph">
            {" "}
            ------------------------------ OR -------------------------------
          </p>
          
          <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign in with google</button>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} />
          <br></br>
          <p className="logRout2">
            {" "}
            Don't have an account?
            <Link className="logRout_b2" to="/SignUp">
              {" "}
              Sign-Up
            </Link>
          </p>
          <ModalDialog2 open={open} handleClose={handleClose} />
        </div>
      </form>
    </div>
  );
};

export default Login;
