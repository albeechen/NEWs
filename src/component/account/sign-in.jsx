import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomizedButton from '../customcomponent/customized-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { StoreContext } from '../../utils/store';
import { auth } from '../../firebase/firebase.utils';

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

const SignIn = props => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      history.push('/');
    }  catch(error){
      console.error(error);  
    }

  }

  return (
    <div className={classes.root}>
      <div><h1>Sign In</h1></div>
      <form className={classes.text} noValidate autoComplete="on" onSubmit={handleSubmit}>
        <TextField id="standard-basic" variant="standard" fullWidth label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <TextField id="standard-basic" variant="standard" fullWidth label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <div className={classes.btngroup}>
          <CustomizedButton type='submit'>Log In</CustomizedButton> 
          <CustomizedButton type='button' onClick={signInWithGoogle}>
            Log In With Google
          </CustomizedButton>
        </div>
      </form>
    </div>
  );
}

export default  withRouter(SignIn);