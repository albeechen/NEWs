import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomButton from '../button/custombutton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { StoreContext } from '../../utils/store';

const useStyles = makeStyles((theme) => ({
  spacing: '10',
  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    padding: '50px',
    width: '60%',
    margin: 'auto',
  },
  nametext: {
    color: 'white',
    textDecoration: 'none'
  },
  btngroup:{
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '100px'
  }
}));

const SignInUp = () => {
  const classes = useStyles();
  const { login: [login, setlogin] } = React.useContext(StoreContext);

  function handleClick(){
    setlogin(true);
  }
 
  return (
    <div className={classes.root}>
      <div><h1>Sign In</h1></div>
      <form className={classes.text} noValidate autoComplete="on">
        <TextField id="standard-error" fullWidth label="Name" variant="standard" />
        <TextField id="standard-error" fullWidth label="Email" variant="standard" />
        <div className={classes.btngroup}>
          <CustomButton onClick={handleClick}>
            <Link className={classes.nametext} to='/'>
              Log In
            </Link>
          </CustomButton> 
          <CustomButton type='button' onClick={signInWithGoogle}>Log In With Google</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignInUp;