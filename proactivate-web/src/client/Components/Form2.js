import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import './Form.css';
import './fonts.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(10),
    '& .MuiTextField-root': {
          margin: theme.spacing(2),
          width: '300px',
        },
    '& .MuiButtonBase-root': {
          margin: theme.spacing(2),
          width: '300px',
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
        <h className = "title">Welcome Back</h>
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
            <Button className = "button1" type="submit" variant="contained"   >
                Login
            </Button>
            <p className='paragraph'> ------------------------------ OR -------------------------------</p>
            <p className='logRout'> 
             <Link className='logRout_b' to="/Login"> Login with Google</Link>
            </p>
            <p className='logRout'> Don't have an account? 
             <Link className='logRout_b' to="/SignUp"> Sign-Up</Link>
            </p>
        </div>
    </form>
  );
};

export default Form2;