import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        height: '100vh'
      },
    },
}));

const SecuritySetting = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}><h1>Security</h1></div>
    );

};

export default SecuritySetting;