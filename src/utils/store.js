import React from 'react';
import NewsData from '../static/newsdata';
import PplData from '../static/ppl-data';
export const StoreContext = React.createContext(null);

export default ({ children }) => {
 // const [login, setLogin] = React.useState(false);
  const [addNews, setAddNews ] = React.useState(NewsData);
  const primaryColor = '#083b66';
  const secondColor = '#cccccc';

  const store = {
   // login: [login, setLogin],
    addNews: [addNews, setAddNews],
    primaryColor,
    secondColor
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}