import React from 'react';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GroupItemList from '../component/home/groupitem-list';
import HomeContainer from '../component/home/homecontainer';
import { StoreContext } from '../utils/store.js';
import NewsData from '../static/newsdata';
import PplData from '../static/ppl-data';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      padding: '30px 0'
    },
    leftsidebar: {
      width: '20%',
      height: '100%',
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

const HomePage = () => {
  const { login: [login, setlogin] } = React.useContext(StoreContext);
  const { addNews: [addNews, setAddNews] } = React.useContext(StoreContext);
  const classes = useStyles();
  const maintitle = login? 'His/Her NEWs' : 'Suggested NEWs';
  const newsItem = login? NewsData: PplData;
  const addData = {
    imageUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    id: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'+ newsItem.length,
  }

  function handleAddClick (){
    setAddNews(true);
    newsItem.push(addData);

  }


  return (
      <div className={classes.root}>
        <div className={classes.leftsidebar}>
          {login ?
            <GroupItemList handleAddClick={handleAddClick}/>:
            null
          }
        </div>
        <div className={classes.main}>
          <div className={classes.maintitle}>
            <h1 className={classes.title}>{maintitle}</h1>
            <span className={classes.span}>(* These photos is from Material UI)</span>
          </div>
          <HomeContainer newsItem={newsItem}/>
        </div>     
      </div>
  );
};

export default HomePage;