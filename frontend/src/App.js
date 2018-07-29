import React, { Component, Fragment } from 'react';
import './App.css';

import AuthAction from './auth/AuthAction'
import QueimadaContainer from './components/QueimadaContainer'
import NavigationBar from './components/NavigationBar'
import {createUser, loginUser, findUser} from './adapter/adapter'
import { Route, Switch, withRouter} from 'react-router-dom'


class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    if ( localStorage.getItem('current_user') ) {
      this.setState({currentUser: JSON.parse(localStorage.getItem('current_user')) })
    }
  }

  signUp = (signupObj) => {
    createUser(signupObj)
    .then(currentUser => this.setState({currentUser}, () => {
      localStorage.setItem('current_user', JSON.stringify(this.state.currentUser))
    }))
  }

  login = (email, password) => {
    loginUser(email, password)
    .then(currentUser => {
      if (currentUser.id !== undefined) {
        findUser(currentUser.id).then(currentUser => this.setState({currentUser: currentUser.user}, () => {
          localStorage.setItem('current_user', JSON.stringify(this.state.currentUser))
        }))
      } else {
        // show something saying that there is no such user
      }
    })
  }

  logout = () => {
    localStorage.removeItem('current_user')
    this.setState({currentUser: null})
    this.props.history.push('/login')
  }

  render() {
    return (
      <Fragment>
        <NavigationBar logout={this.logout} currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/signup' render={() => <AuthAction submitAuthAction={this.signUp} authType='signup'/>}/>
          <Route path='/login' render={() => <AuthAction submitAuthAction={this.login} authType='login'/>}/>
          <Route path={`/users/:id`} component={QueimadaContainer}/>
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
