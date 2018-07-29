import React, { Component, Fragment } from 'react';
import './App.css';

import AuthAction from './auth/AuthAction'
import QueimadaContainer from './components/QueimadaContainer'
import NavigationBar from './components/NavigationBar'
import { createUser, loginUser, getCurrentUser } from './adapter/adapter'
import { Route, Switch, withRouter} from 'react-router-dom'


class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    if ( localStorage.getItem('token') ) {
      getCurrentUser(localStorage.getItem('token')).then(user => {
        this.setState({currentUser: user})
      })
    }
  }

  signUp = (signupObj) => {
    createUser(signupObj)
    .then(data => {
      getCurrentUser(data.token).then(user => {
        this.setState({currentUser: user}, () => {
          localStorage.setItem('token', data.token)
          this.props.history.push(`/users/${data.token}`)
        })
      })
    })
  }

  login = (email, password) => {
    loginUser(email, password)
    .then(data => {
      if (!data.error) {
        getCurrentUser(data.token).then(user => {
          this.setState({currentUser: user}, () => {
            localStorage.setItem('token', data.token)
            this.props.history.push(`/users/${data.token}`)
          })
        })
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
