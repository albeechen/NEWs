import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

import PersonalInfoItem from './personalinfo-item';

import { PersonalInfoList } from '../../static/personalinfolist';



const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #cccccc',
        borderRadius: '10px',
    },
    title:{
        fontSize: '28px',
        textAlign: 'left',
        padding: '20px',
    }
}));

const PersonalInfo = () => {
    const classes = useStyles();
    const infolist = PersonalInfoList;

    return (
        <Container className={classes.root}>
            <div className={classes.title}>Personal info</div>
            <List>
                {infolist.map((info) => (
                    <PersonalInfoItem id={info.id} title={info.title}/>
                ))}
            </List>
        </Container>
    );
};

export default PersonalInfo;