import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import SignIn from '../component/account/sign-in';
import SignUp from '../component/account/sign-up';
import NewSignIn from '../component/account/new-sign-in';

  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        margin: '50px auto',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }, 
      sign:{
        width: '50%',
      },
  }));
  
  const SignInUpPage = () => {
    const classes = useStyles();
  
    return (

        <div className={classes.root}>
            <SignIn className={classes.sign} />
            <Divider orientation="vertical" flexItem />
            <NewSignIn className={classes.sign} /> 
        </div>
    )
};

export default SignInUpPage;