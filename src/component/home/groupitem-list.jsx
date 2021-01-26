import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import GroupItem from './groupitem';
import GroupItemListData from '../../static/groupitem-list-data';
import Divider from '@material-ui/core/Divider';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import CustomizedListItem from '../customcomponent/customized-listitem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '90%',
        textAlign: 'left',
        position:'relative'
    },
    note:{
        paddingLeft: '16px',
        position: 'absolute',
        top: '300px',
        textDecoration: 'underline'
    }
}))

const GroupItemList = ({handleAddClick}) => {
    const classes = useStyles();
    const items = GroupItemListData;
   
    return (
        <div className={classes.root}>
            <CustomizedListItem icon={<AddAPhotoIcon />} title={'Add'} onClick={handleAddClick}/>:
            <Divider />
            <List> 
                {
                    items.map( item =>(
                        <CustomizedListItem id={item.title} icon={item.iconName} title={item.title}/>
                    ))
                }
            </List>
        </div>
    )
};

export default GroupItemList;