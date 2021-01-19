import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';



const AccountFunctionList = [
    {
        title: 'Account',
        id: 'account1',
        iconName: <AccountBoxIcon/>,
        linkUrl: '/account/profile'
    },
    {
        title: 'Security',
        id: 'account2',
        iconName: <LockIcon/>,
        linkUrl: '/account/profile/security'
    },
    {
        title: 'People and Sharing',
        id: 'account3',
        iconName: <SupervisedUserCircleIcon/>,
        linkUrl: '/account/profile/peoplesharing'
    },
  
];

export default AccountFunctionList;