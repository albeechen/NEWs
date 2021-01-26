import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import ProfilePage from './profilepage';
import SignInUpPage from './sign-in-and-sign-uppage';
import NewSignIn from '../component/account/new-sign-in';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100vh',
    }
}))

const AccountPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>       
            <Route exact path={'/account/'} component={SignInUpPage} />    
            <Route path={'/account/profile'} component={ProfilePage} />
            <Route path={'/account/new-sign-in'} component={NewSignIn} />
        </div>
    );
};

export default AccountPage;