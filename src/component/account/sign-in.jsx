import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomButton from '../button/custombutton';


const useStyles = makeStyles((theme) => ({
  spacing: '10',
  root: {
    flexGrow: 1,
    width: '100%',
    position: 'relative',
  },
  text: {
    padding: '50px',
    width: '50%',
    margin: 'auto',
  },
  nametext: {
    color: 'white',
    textDecoration: 'none'
  },
  btn:{
    position: 'absolute',
    buttom: '50px'
  }
}));

const SignInUp = () => {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <div><h1>Sign In</h1></div>
      <form className={classes.text} noValidate autoComplete="on">
        <TextField id="standard-error" fullWidth label="Name" variant="standard" />
        <TextField id="standard-error" fullWidth label="Email" variant="standard" />
        <Link className={classes.nametext} to='/'>
          <CustomButton style= {{
            marginTop: '100px'
          }}>Log In</CustomButton>
        </Link>
      </form>
    </div>
  );
}

export default SignInUp;