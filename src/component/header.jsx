import React from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../utils/store';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountButton from './button/accountbutton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'left'
  },
  colorstyle:{
    color: '#083b66',
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
}));

  const Header = () => {
    const classes = useStyles();
    const { login: [login, setlogin] } = React.useContext(StoreContext);
    
    return ( 
      <div className={classes.root}>
        <AppBar position="static" className={classes.style}>
          <Toolbar>
            <Link to="/" className={classes.title}>NEWs</Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon className={classes.colorstyle}/>
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
            {login?
              <Link to="/account/profile" className={classes.linkstyle}>Account</Link>
              :
              <Link to="/account/sign-in-up" className={classes.linkstyle} >Sign In</Link>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  
};

export default Header;