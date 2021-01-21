import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Button from '@material-ui/core/Button';
import NewsDetail from '../home/newsdetail';


const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    '&::-webkit-scrollbar': { 
        display: 'none'
    },
  }
});

export default function HomeContainer({newsItem}) {
  const classes = useStyles();
  const [opendetail, setOpendetail] = useState(false);
  const [selectItem, setSelectItem] = useState('');

  const handleClick = (event) => {
    setSelectItem(event.currentTarget.getAttribute('imageUrl'));
    setOpendetail(true);
  };

  const handleClose = () => {
    setOpendetail(false);
  };


  return (
    <div>
      <ImageList cols={3} rowHeight={200} className={classes.root}>
        {newsItem.map((item) => (
          <ImageListItem 
              component={Button}
              id={item.id}
              onClick={handleClick}
              imageUrl={item.imageUrl}
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              >
              
              
          </ImageListItem>
        ))}
      
      </ImageList>
      <NewsDetail selectItem={selectItem} open={opendetail} onClose={handleClose}/> 
    </div>
  );
}
