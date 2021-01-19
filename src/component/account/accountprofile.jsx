import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PersonalInfo from '../account/personalinfo';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      width: '100%',
      height: '100vh'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      fontSize: 28
    },
    info_des:{
      color: '#083b66'
    },
    avatar:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
}));

const AccountProfile = ({ logout, user }) => {
  const info = {
    userName: 'Annie',
    userEmail: 'exsample@gmail.com',
    userBirthday: '11/23/1988',
    userlocation: 'California'
  };
  const classes = useStyles();
 
  
  return (
      <div className={classes.root}>
        <div className={classes.avatar}>
          <Avatar className={classes.large} alt={info.userName[0]} src="https://i.ibb.co/6N9WKts/Annie.jpg"/>
        </div>
        <div>
          <h1 className={classes.info_des}>Welcome! { info.userName }</h1>
        </div>
        <div>
          <PersonalInfo items={info}/>
        </div>
      </div>
  );
};

export default AccountProfile;