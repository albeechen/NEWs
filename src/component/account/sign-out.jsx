import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { StoreContext } from '../../utils/store';


const useStyles = makeStyles((theme) => ({
    iconstyle: {
        color: '#808080',
    },
    itemstyle: {
        color: '#808080',
        width: '90%',
        textDecoration: 'none',
    },
    activesyle:{ 
        fontWeight: "bold", 
        "& $iconstyle":{
            color: '#808080',
        },
    }
}));

const SignOut = () => {

    const classes = useStyles();
    const { login: [login, setlogin] } = React.useContext(StoreContext);

    function handleClick(){
        setlogin(false);
    }

    return (
        <ListItem 
            component={NavLink}
            to={'/'}
            activeClassName={classes.activesyle}
            className={classes.itemstyle}
            onClick={handleClick}
        >
            <ListItemIcon id="iconstyle" className={classes.iconstyle}><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary={'Sign Out'}/>
        </ListItem>
    ) 
};

export default SignOut;