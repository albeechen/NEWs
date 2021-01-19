import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AccountProfile from '../component/account/accountprofile';
import SecuritySetting from '../component/account/security-setting';
import PeopleSharingSetting from '../component/account/peoplesharing-setting';
import SideBar from '../component/account/sidebar';
import AccountSidebarList from '../static/account-sidebar-list';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      padding: '30px 0'
    },
    sidebar:{
        width: '25%',
        height: '100%',
    },
    accountinfo: {
        width: '75%',
        height: '100%',
        padding: '0 5%'
    }
}))

const ProfilePage = () => {
    const accountsidebarlist = AccountSidebarList;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.sidebar}>
                <SideBar items={accountsidebarlist}/>
            </div>
            <div className={classes.accountinfo}> 
                <Switch >            
                    <Route path={'/account/profile'} component={AccountProfile} exact/>
                    <Route path={'/account/profile/security'} component={SecuritySetting} />
                    <Route path={'/account/profile/peoplesharing'} component={PeopleSharingSetting} />
                </Switch>
            </div>
        </div>
    );
};

export default ProfilePage;