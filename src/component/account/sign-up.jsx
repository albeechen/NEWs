import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomButton from '../button/custombutton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  text: {
    padding: '50px',
    width: '50%',
    margin: 'auto',
  },
  button:{
    marginTop: '100px',
    backgroundColor:'#083b66',
    color:'white',
    width: '100%',
    height: '40px'
  },
  nametext: {
    color: 'white',
    textDecoration: 'none'
  },
  btn:{
    width: '100%',
    marginTop: '100px'
  }
}));

const SignInUp = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div><h1>Create A New Account</h1></div> 
      <form className={classes.text} noValidate autoComplete="on">
        <TextField id="standard-basic" fullWidth label="Email" variant="standard" />
        <div className={classes.btn}>
          <Link className={classes.nametext} to='/account/new-sign-in'>
            <CustomButton>Next</CustomButton>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInUp;