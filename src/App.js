import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './component/header/header';
import AccountPage from './page/accountpage';
import ProfilePage from './page/profilepage';
import HomePage from './page/homepage';
import { StoreContext } from '../src/utils/store';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      login: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            login: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ login: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header login={this.state.login}/>
        <Switch>
          <Route exact path="/" render={() => <HomePage login={this.state.login} />} />
          <Route path='/account' component={AccountPage} />
        </Switch>
      </div>
    )
    }
}

export default App;
