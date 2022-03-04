
import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import './Form.css';
import './fonts.css'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(10),
  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
  '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
        width: '300px'
      },
    },
  }));

const Form = ({ handleClose }) => {

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, email, password);
    handleClose();
  };


  return (
    <form className={classes.root}>
        <h className = "title">PROACTIVATE.</h>
        <TextField 
            label="Username" 
            variant="outlined" 
            required
            value={username}
            onChange={e => setUsername(e.target.value)} 
            />
        <TextField 
            label="Email" 
            variant="outlined" 
            type="email" 
            required 
            value={email}
            onChange={e => setEmail(e.target.value)} />
        <TextField 
            label="Password" 
            variant="outlined" 
            type="password" 
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
        />

        <div>
            <Button className = "button1" type="submit" variant="contained" color="#11848a">
                sign up
            </Button>
            <p className='signin'>Already have an accout? Log-In</p>
        </div>

       
    </form>
  );
};

export default Form;