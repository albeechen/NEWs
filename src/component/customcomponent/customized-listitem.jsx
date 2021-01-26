import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    iconstyle: {
        color: '#808080',
        marginLeft: '16px'
    },
    textstyle: {
        color: '#808080'
    },
    btnstyle: {
        color: '#808080',
        width: '100%',
            "&:hover": {
            color: '#083b66',
            backgroundColor: 'rgba(192,192,192,0.5)',
            borderRadius: '0px 20px 20px 0px',
            "& $iconstyle":{
                color: '#083b66',
            },
            "& $textstyle":{
                color: '#083b66',
            }
        }
    }
}))    


const CustomizedListItem = ({icon, title, ...otherprops}) => {
    const classes = useStyles(); 
    console.log("CustomizedListItem" + title);
    return(
        <ListItem key={title} component={Button} className={classes.btnstyle} {...otherprops} >
            <ListItemIcon id="iconstyle" className={classes.iconstyle}>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} className={classes.textstyle}/>
        </ListItem>  
    )
}

export default CustomizedListItem;