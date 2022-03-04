import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ModalDialog2 from '../../Components/ModalDialog2';


const Login = () => {

  const [open,setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
   <div className="Login">
     <Button variant="contained" color="primary" onClick={handleOpen}>
    Login
    </Button>
      <ModalDialog2 open={open} handleClose={handleClose} />
   </div>
    
    
  );
};
  
export default Login;