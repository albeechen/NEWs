import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { auth } from '../../firebase/firebase.utils';


const StyledMenu = withStyles({
    list: {
        width: '100px',
        border: '1px solid #d3d4d5',
        color: '#808080',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        textAlign: 'center',
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '#083b66',
        },
    },
   
  },
}))(MenuItem);


const useStyles = makeStyles((theme) => ({
   icon: {
       color: '#083b66'
   },
   listtextitem: {
        width: '100px', 
        display: 'block',
   }
}));

const HeaderSelector = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () =>{
        auth.signOut();
        console.log('log Out'); 
    }

  return (
    <div>
        <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="text"  
            onClick={handleClick}
        >
            <AccountCircleIcon className={classes.icon}/>
            <ExpandMoreIcon className={classes.icon}/>
        </Button>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <StyledMenuItem component={Link} to='/account'>
                <ListItemText className={classes.listtextitem}>ACCOUNT</ListItemText>
            </StyledMenuItem>
            <StyledMenuItem component={Button} onClick={handleLogout}>
                <ListItemText className={classes.listtextitem}>Log Out</ListItemText>
            </StyledMenuItem>
        </StyledMenu>
    </div>
  );
}

export default HeaderSelector;



