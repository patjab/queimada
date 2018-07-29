import React, { Component, Fragment } from 'react';
import './App.css';

import AuthAction from './auth/AuthAction'
import QueimadaContainer from './components/QueimadaContainer'
import NavigationBar from './components/NavigationBar'
import {createUser, loginUser, findUser} from './adapter/adapter'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  state = {
    currentUser: {}
  }

  signUp = (signupObj) => {
    createUser(signupObj)
    .then(currentUser => this.setState({currentUser}, ()=>console.log(this.state.currentUser)))
  }

  login = (email, password) => {
    loginUser(email, password)
    .then(currentUser => {
      if (currentUser.id !== undefined) {
        findUser(currentUser.id).then(currentUser => this.setState({currentUser: currentUser.user}))
      } else {
        // show something saying that there is no such user
      }
    })
  }

  render() {
    return (
      <Fragment>
        <NavigationBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/signup' render={() => <AuthAction submitAuthAction={this.signUp} authType='signup'/>}/>
          <Route path='/login' render={() => <AuthAction submitAuthAction={this.login} authType='login'/>}/>
          <Route path={`/user/:id`} component={QueimadaContainer}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
