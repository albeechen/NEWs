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

const PeopleSharingSetting = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div><h1>People and Sharing</h1></div>
        </div>
    );

};

export default PeopleSharingSetting;