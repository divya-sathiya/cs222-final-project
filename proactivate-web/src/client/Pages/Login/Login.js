import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import ModalDialog2 from "../../Components/ModalDialog2";
import GoogleLogin from "react-google-login";
import axios from "axios";

const Login = () => {
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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Login
      </Button>
      <GoogleLogin
        clientId="393335656297-7iu82fqvv69527r36jk2f7c6d0s7i9sg.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <ModalDialog2 open={open} handleClose={handleClose} />
    </div>
  );
};

export default Login;
