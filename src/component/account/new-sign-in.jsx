import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomButton from '../button/custombutton';
import { StoreContext } from '../../utils/store';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    text: {
      padding: '50px',
      width: '40%',
      margin: 'auto',
      border: '1px solid #808080',
      borderRadius: '15px' 
    },
    button:{
      marginTop:'100px',
      backgroundColor:'#083b66',
      color:'white',
      width:'100%',
      height:'40px',
    },
    nametext: {
      width:'50%',
      textDecoration: 'none',
    },
    btn:{
      width: '100%',
      marginTop: '100px'
    }
  }));
  
const NewSignIn = () => {
    const classes = useStyles();
    const { login: [login, setlogin] } = React.useContext(StoreContext);

    function handleClick(){
      setlogin(true);
    }

    return (
      <div className={classes.root}>
        <div><h1>Create A New Account</h1></div> 
        <form className={classes.text} noValidate autoComplete="on">
          <TextField id="standard-error" className={classes.nametext} label="First Name" variant="standard" />
          <TextField id="standard-basic" className={classes.nametext} label="Last Name" variant="standard" /> 
          <TextField id="standard-basic" fullWidth label="Password" variant="standard" />
          <TextField id="standard-basic" fullWidth label="Birthday" variant="standard" />
          <div className={classes.btn}>
            <Link className={classes.nametext} to='/'>
              <CustomButton onClick={handleClick}>Register</CustomButton>
            </Link>
          </div>
        </form>
      </div>
    );
  }
  
  export default NewSignIn;