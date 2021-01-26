import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import CustomizedButton from '../customcomponent/customized-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    text: {
      /*padding: '50px',
      width: '40%',
      margin: 'auto',
      border: '1px solid #808080',
      borderRadius: '15px' */
      padding: '50px',
      width: '60%',
      margin: 'auto',
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
  
const NewSignIn = props => {
  const classes = useStyles();
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const { history } = props;
  const handleSubmit = async event => {
    
    event.preventDefault();

    if (password !== confirmpassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      createUserProfileDocument(user, { displayname });
      setDisplayname('');
      setEmail('');
      setPassword('');
      setConfirmpassword('');
      
    }  catch(error){
      console.error(error);  
    }

  }
    
      
  return (
    <div className={classes.root}>
      <div><h1>Create A New Account</h1></div> 
      <form className={classes.text} noValidate autoComplete="on" onClick={handleSubmit}>
        <TextField id="standard-error" fullWidth label="Name" value={displayname} onChange={e=>setDisplayname(e.target.value)}/>
        <TextField id="standard-basic" fullWidth label="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <TextField id="standard-basic" fullWidth label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <TextField id="standard-basic" fullWidth label="Confirm Password" type="password" value={confirmpassword} onChange={e=>setConfirmpassword(e.target.value)}/>
        <div className={classes.btn} >
          <Link className={classes.nametext} to='/'>
            <CustomizedButton type='submit'>Register</CustomizedButton>
          </Link>
        </div>
      </form>
    </div>
  );
    
}
  
export default withRouter(NewSignIn);