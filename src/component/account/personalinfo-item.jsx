import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: '#e6e6e6',
        },
    },
    linkstyle: {
        textDecoration:'none'
    },
    style: {
        color: '#808080',
        width: '40%',
    },
    valueStyle: {
        textAlign: 'left',
        width: '60%'
    },
    
}));

export const PersonalInfoEaxmple = {
    displayname: "Annie",
    email: "Example@gmail.com",
    birthday: '11/23/1988',
    location: 'California',
    password: 'xxxxxx',
};

const PersonalInfoItem = ({currentUser, info}) => {
    const classes = useStyles();
    const value = currentUser? currentUser[info.name]:'';

    return (
        <ListItem 
            className={classes.root}
            component={NavLink}
            exact
            to={'/account/edit'}>
            <ListItemText className={classes.style} primary={info.title}/>
            <ListItemText className={classes.valueStyle}>{value}</ListItemText>
            <ChevronRightIcon/>
        </ListItem>
    );
    
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});


export default connect(mapStateToProps)(PersonalInfoItem);