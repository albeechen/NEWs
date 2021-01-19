import React from 'react';

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [login, setlogin] = React.useState(false);
  const [addNews, setAddNews ] = React.useState(false);
  const primaryColor = '#083b66';
  const secondColor = '#cccccc';

  const store = {
    login: [login, setlogin],
    addNews: [addNews, setAddNews],
    primaryColor,
    secondColor
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}