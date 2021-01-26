import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import GroupItemList from '../component/home/groupitem-list';
import HomeContainer from '../component/home/homecontainer';
import { StoreContext } from '../utils/store.js';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      padding: '30px 0'
    },
    leftsidebar: {
      width: '20%',
      height: '100vh',
    },
    main: {
      width: '65%',
      height: '100%',
    },
    title:{
      textAlign: 'left',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#808080'
    },
    span:{
      fontSize: '12px',
      position: 'absolute',
      right: '10px',
      bottom: '15px'
    },
    maintitle:{
      display:'flex',
      position: 'relative',
      padding: '0 10px'
    }
}))

const HomePage = ({login}) => {
  //const { login: [login, setlogin]} = React.useContext(StoreContext);
  const { addNews: [addNews, setAddNews] } = React.useContext(StoreContext);
  const classes = useStyles();
  const loginControl = login;
  
  const maintitle = loginControl? 'His/Her NEWs':'Suggested NEWs';
  const addData = 
  {
    imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    id: 'addNews_'+ addNews.length,
  }

  function handleAddClick (){
    console.log('add News');
    setAddNews([...addNews, addData]);
  }


  return (
    <div className={classes.root}>
        <div className={classes.leftsidebar}>
          {loginControl ?
            <GroupItemList handleAddClick={handleAddClick}/>:
            null
          }
        </div>
        <div className={classes.main}>
          <div className={classes.maintitle}>
            <h1 className={classes.title}>{maintitle}</h1>
            <span className={classes.span}>(* These photos is from Material UI)</span>
          </div>
          <HomeContainer newsItem={addNews}/>
        </div>     
      </div>
  );
};

export default HomePage;