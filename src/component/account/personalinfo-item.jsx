import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    style: {
        color: '#808080',
        width: '40%'
    },
    valueStyle: {
        textAlign: 'left',
        width: '60%'
    }
}));

export const PersonalInfoEaxmple = {
    NAME: 'Annie',
    EMAIL: 'Example@gmail.com',
    BIRTHDAY: '1/22/1988',
    PASSWORD: 'xxxxxx',
    LOCATION: 'California'
};

const PersonalInfoItem = ({ title }) => {
    const classes = useStyles();
    const value = PersonalInfoEaxmple[title];

    return (
        <ListItem>
            <ListItemText primary={title} className={classes.style}/>
            <ListItemText className={classes.valueStyle}>{value}</ListItemText>
        </ListItem>
    );
    
};

export default PersonalInfoItem;