import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import SidebarItem from './sidebar-item';
import SignOut from './sign-out';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100vh',
      textAlign: 'left'
    }
}))

const SideBar = ({items}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List>     
                {items.map(item => (
                    <SidebarItem key={item.id} {...item}/>
                ))}     
            </List>
            <Divider orientation="vertical" flexItem />
            <SignOut />
        </div>
    );
};

export default SideBar;