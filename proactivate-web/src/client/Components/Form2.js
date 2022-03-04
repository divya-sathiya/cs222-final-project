
import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
  '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

const Form2 = ({ handleClose }) => {

  const classes = useStyles();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userName, password);
    handleClose();
  };


  return (
    <form className={classes.root}>
        <TextField 
            label="User Name" 
            variant="outlined" 
            required
            value={userName}
            onChange={e => setUserName(e.target.value)} 
            />
        <TextField 
            label="Password" 
            variant="outlined" 
            type="password" 
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
        />

        <div>
            <Button variant="contained">
                Log in with Google
            </Button>
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </div>
    </form>
  );
};

export default Form2;