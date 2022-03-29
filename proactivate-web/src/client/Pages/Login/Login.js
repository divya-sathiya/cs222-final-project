import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ModalDialog2 from "../../Components/ModalDialog2";
import "./Login.css";
import { signInWithGoogle } from "../../../server/config/firebase-config";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /* for google login */
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

  return (
    <div className="Login">
      <form className={classes.root}>
        <h className="title2">Welcome Back</h>
        <TextField
          label="Username"
          variant="outlined"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button className="button2" type="submit" variant="contained">
            Login
          </Button>
          <p className="paragraph">
            {" "}
            ------------------------------ OR -------------------------------
          </p>
          {/* <GoogleLogin
            clientId="393335656297-7iu82fqvv69527r36jk2f7c6d0s7i9sg.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
          <button class="login-with-google-btn" onClick={signInWithGoogle}>Sign in with google</button>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} />
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
