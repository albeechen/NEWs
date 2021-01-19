
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { StoreContext } from '../../utils/store.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor:'#083b66',
        color:'white',
        fontWeight: 'bold',
        height:'40px',
        '&:hover':{
            opacity: '0.8',
        }
    },
}))

const CustomButton = ({name, margin}) => {
    const { login: [login, setlogin] } = React.useContext(StoreContext);
    const classes = useStyles();
 
    function handleClick(){
      setlogin(true);
    }
    
    return(
        <button 
            onClick={handleClick} 
            className={classes.root} 
            variant="contained"
            style= {{
                marginTop: `${margin}`
            }}
        >
            {name}
        </button>
    )
}

export default CustomButton;