import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/header';
import AccountPage from './page/accountpage';
import ProfilePage from './page/profilepage';
import HomePage from './page/homepage';


function App() {
  
   return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/account' component={AccountPage}/>
        <Route path='/account/profile' component={ProfilePage}/>
      </Switch>
    </div>
  );
}

export default App;
