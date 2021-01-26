import React  from 'react';
import { NavLink } from 'react-router-dom';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    iconstyle: {
        color: '#808080' 
    },
    itemstyle: {
        color: '#808080',
        width: '90%',
        textDecoration: 'none',
    },
    activesyle:{ 
        fontWeight: "bold", 
        color: "#083b66" ,
        backgroundColor: 'rgba(192,192,192,0.3)',
        borderRadius: '0px 20px 20px 0px',
        "& $iconstyle":{
            color: '#083b66',
        },
    }
    
}));

const AccountSidebarItem = ({linkUrl, iconName, title}) => {
    const classes = useStyles();
    
    return(
        <ListItem 
            component={NavLink}
            exact
            to={linkUrl}
            activeClassName={classes.activesyle}
            className={classes.itemstyle}
        >
            <ListItemIcon id="iconstyle" className={classes.iconstyle}>{iconName}</ListItemIcon>
            <ListItemText primary={title}/>
        </ListItem>  
    );
};

export default AccountSidebarItem;