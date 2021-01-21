
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '180px',
        backgroundColor:'#083b66',
        color:'white',
        fontWeight: 'bold',
        height:'40px',
        '&:hover':{
            opacity: '0.8',
        }
    },
}))

const CustomButton = ({children, ...otherprops}) => {
    const classes = useStyles(); 
    
    return(
        <button 
            className={classes.root} 
            variant="contained"
            {...otherprops}
        >
            {children}
        </button>
    )
}

export default CustomButton;