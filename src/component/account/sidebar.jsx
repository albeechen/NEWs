import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


import SidebarItem from './sidebar-item';

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
        </div>
    );
};

export default SideBar;