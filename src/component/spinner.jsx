import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const useStyles = makeStyles((theme) => ({
    spinneroverlay:{
        height: '60vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnercontainer: {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        border: '3px solid rgba(195, 195, 195, 0.6)',
        borderRadius: '50%',
        borderTopColor: '#636767',
        animation: 'spin 1s ease-in-out infinite',
        '&::-webkit-animation': 'spin 1s ease-in-out infinite',
        '&::@keyframes spin': {
            '&::to': {
            '&::-webkit-transform': rotate('360deg')
            }
        },
        '&::@-webkit-keyframes spin':{ 
            '&::to': {
            '&::-webkit-transform': rotate('360deg')
            }
        }
    }
}));

const Spinner = WrappedComponent => {

    const classes = useStyles();
 
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <div className={classes.spinneroverlay}>
                <div className={classes.spinnercontainer}/>
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default Spinner;