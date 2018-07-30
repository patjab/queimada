import React, { Component, Fragment } from 'react';
import './App.css';

import AuthAction from './auth/AuthAction'
import QueimadaContainer from './components/QueimadaContainer'
import NavigationBar from './components/NavigationBar'
import { createUser, loginUser, getCurrentUser } from './adapter/adapter'
import { Route, Switch, withRouter} from 'react-router-dom'


class App extends Component {
  state = {
    currentUser: null,
    errors: null
  }

  componentDidMount() {
    if ( localStorage.getItem('token') ) {
      getCurrentUser(localStorage.getItem('token')).then(user => {
        this.setState({currentUser: user.user})
      })
    }
  }

  signUp = (signupObj) => {
    createUser(signupObj)
    .then(data => {
      if (!data.errors) {
        getCurrentUser(data.token).then(user => {
          this.setState({currentUser: user.user}, () => {
            localStorage.setItem('token', data.token)
            this.props.history.push(`/users`)
          })
        })
      } else {
        this.setState({errors: data.errors})
      }
    })
  }

  login = (email, password) => {
    loginUser(email, password)
    .then(data => {
      if (!data.error) {
        getCurrentUser(data.token).then(user => {
          this.setState({currentUser: user.user}, () => {
            localStorage.setItem('token', data.token)
            this.props.history.push(`/users`)
          })
        })
      } else {
        this.setState({errors: data.error})
      }
    })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({currentUser: null})
    this.props.history.push('/login')
  }

  render() {
    return (
      <Fragment>
        <NavigationBar logout={this.logout} currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/signup' render={() => <AuthAction submitAuthAction={this.signUp} authType='signup' errors={this.state.errors}/>}/>
          <Route path='/login' render={() => <AuthAction submitAuthAction={this.login} authType='login' errors={this.state.errors}/>}/>
          <Route path='/' component={() => <QueimadaContainer currentUser={this.state.currentUser}/>}/>
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
