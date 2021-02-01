import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AccountProfile from '../component/account/accountprofile';
import SecuritySetting from '../component/account/security-setting';
import PeopleSharingSetting from '../component/account/peoplesharing-setting';
import SideBar from '../component/account/sidebar';
import AccountSidebarList from '../static/account-sidebar-list';
import PersonalInfoEdit from '../component/account/personalinfo-edit';

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

const AccountPage = ({ match }) => {
    const accountsidebarlist = AccountSidebarList;
    const classes = useStyles();
   
    return ( 
        <div className={classes.root}>
            <div className={classes.sidebar}>
                <SideBar items={accountsidebarlist} />
            </div>
            <div className={classes.accountinfo}> 
                <Route path={`${match.url}/`} component={AccountProfile} exact />
                <Route path={`${match.url}/security`} component={SecuritySetting} />
                <Route path={`${match.url}/peoplesharing`} component={PeopleSharingSetting} />
                <Route path={`${match.url}/edit`} component={PersonalInfoEdit} />
            </div>
        </div>  
    );
};

export default withRouter(AccountPage);