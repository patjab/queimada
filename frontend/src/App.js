import React, { Component } from 'react';
import './App.css';

import Signup from './auth/Signup'
import Queimada from './components/Queimada'

import {createUser} from './adapter/adapter'

import { Route, Switch } from 'react-router-dom'


class App extends Component {

  state = {

  }

  signUp = (signupObj) => {
    // {this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.password_confirmation}
    createUser(signupObj)
  }

  render() {
    return (
      <Switch>
        <Route path='/signup' render={() => <Signup signUp={this.signUp}/>}/>
        <Route path={`/user/:id`} component={Queimada}/>
      </Switch>
    );
  }
}

export default App;
