import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { alpha } from '@material-ui/core/styles';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { IconButton } from '@material-ui/core';
import HeaderSelector from '../header/header-selector';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left'
  },
  ListItemText:{
    color: '#808080',
  },
  inputRoot: {
    color: 'inherit',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontSize: '40px',
    textDecoration: 'none',
    color: '#083b66',
    display: 'flex',
    fontFamily: "'Big Shoulders Stencil Text', cursive"
  },
  style: {
      background: 'rgba(255,255,255,0.1)',
      color: 'black'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkstyle: {
    textDecoration: 'none',
    color: '#083b66',
    '&:hover': {
      textDecoration: 'underline'
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  colorstyle: {
    color: '#808080'
  }
}));



const Header = ({currentUser}) => {
    //console.log(Boolean(currentUser));
    const classes = useStyles();
    
    return ( 
      <div className={classes.root}>
        <AppBar position="static" className={classes.style}>
          <Toolbar>
            <Link to="/" className={classes.title}>NEWs</Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {currentUser ? 
              (
                <HeaderSelector />
              ) : (
                <IconButton>
                  <Link className={classes.colorstyle} to='/sign-in-and-up'>
                    <AccountCircleIcon/>
                  </Link>
                </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);