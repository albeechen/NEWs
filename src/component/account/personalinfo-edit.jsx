import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomizedButton from '../customcomponent/customized-button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
}));


const PersonalInfoEdit = () =>{
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <div><h1>Create A New Account</h1></div> 
        <form className={classes.text} noValidate autoComplete="on">
          <TextField id="standard-basic" fullWidth label="Email" variant="standard" />
          <div className={classes.btn}>
            <Link className={classes.nametext} to='/account/new-sign-in'>
              <CustomizedButton>Next</CustomizedButton>
            </Link>
          </div>
        </form>
      </div>
    );
};

export default PersonalInfoEdit;