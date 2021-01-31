import React from 'react';
import { connect } from 'react-redux'; 

import { makeStyles } from '@material-ui/core/styles';

import PersonalInfo from '../account/personalinfo';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      width: '100%',
    },
    info_des:{
      color: '#083b66'
    },
    avatar:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px'
    }
}));

const AccountProfile = ({currentUser}) => {
  const displayname = currentUser? currentUser.displayName: '';
   
  const classes = useStyles();
  
  return (
      <div className={classes.root}>
        <div className={classes.avatar}>
          <Avatar
            style={{
              margin: "10px",
              width: "140px",
              height: "140px",
            }} 
            alt={displayname} 
            src="https://i.ibb.co/6N9WKts/Annie.jpg"/>
        </div>
        <div>
          <h1 className={classes.info_des}>Welcome! { displayname }</h1>
        </div>
        <div>
          <PersonalInfo />
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(AccountProfile);