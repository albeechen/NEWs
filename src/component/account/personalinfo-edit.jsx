import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import CustomizedButton from '../customcomponent/customized-button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    textStyle:{
      marginTop: '50px'
    },
    text: {
      padding: '50px',
      width: '60%',
      margin: 'auto',
    },
    btngroup:{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '50px'
    }
}));


const PersonalInfoEdit = props => {
    const classes = useStyles();
    const titleName = props.location.state.title;
    const value = props.location.state.origin;
  
    return (
      <div className={classes.root}>
        <div><h1>Update {titleName}</h1></div> 
        <form className={classes.text} noValidate autoComplete="on">
          <TextField 
            id="standard-read-only-input"
            fullWidth 
            label={`Original ${titleName}`} 
            className={classes.textStyle} 
            value={value} 
            variant="standard" 
            InputProps={{
              readOnly: true,
              shrink: true
            }}
          />
          <TextField 
            id="standard-basic" 
            fullWidth 
            label={titleName} 
            className={classes.textStyle} 
            variant="standard" 
          />
          <div className={classes.btngroup}>
            <CustomizedButton>Cancel</CustomizedButton>
            <CustomizedButton>Save</CustomizedButton>
          </div>
        </form>
      </div>
    );
};

export default PersonalInfoEdit;