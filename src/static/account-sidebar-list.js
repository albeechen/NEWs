import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const AccountFunctionList = [
    {
        title: 'Account',
        id: 'profile',
        iconName: <AccountBoxIcon/>,
        linkUrl: '/account'
    },
    {
        title: 'Security',
        id: 'security',
        iconName: <LockIcon/>,
        linkUrl: '/account/security',
    },
    {
        title: 'People and Sharing',
        id: 'peoplesharing',
        iconName: <SupervisedUserCircleIcon/>,
        linkUrl: '/account/peoplesharing',
    }
  
];

export default AccountFunctionList;