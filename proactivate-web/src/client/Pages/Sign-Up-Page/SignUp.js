import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ModalDialog from '../../Components/ModalDialog';


//Pop up the sign up component when clicked, close otherwise
const SignUp = () => {
  const [open,setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
   <div className="SignUp">
     <Button variant="contained" color="primary" onClick={handleOpen}>
    Signup
    </Button>
      <ModalDialog open={open} handleClose={handleClose} />
   </div>
  );
};
  
export default SignUp;