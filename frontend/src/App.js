import React, { Component, Fragment } from 'react';
import './App.css';

import AuthAction from './auth/AuthAction'
import QueimadaContainer from './components/QueimadaContainer'
import NavigationBar from './components/NavigationBar'
import { createUser, loginUser, getCurrentUser, getUsersFriendRequest, getMyFriendRequests, rejectFriendRequest, acceptFriendRequest} from './adapter/adapter'
import { Route, Switch, withRouter} from 'react-router-dom'
import {getAllUsers } from './adapter/adapter'


class App extends Component {
  state = {
    currentUser: null,
    errors: null,
    allUsers: [],
    friendSuggestions: [],
    friendRequests: [], // not the ones user created
    createdFriendRequest: [],  // the ones user created
  }

  compileAllFriendRequestsIntoState = () => {
    getUsersFriendRequest(this.state.currentUser.id, localStorage.getItem('token'))
    .then(data => this.setState({friendRequests: data.friend_requests}))

    getMyFriendRequests(this.state.currentUser.id, localStorage.getItem('token'))
    .then(data => this.setState({createdFriendRequest: data.friend_requests}))
  }

  setUpLoggedInUser = (data) => {
    return getCurrentUser(data.token).then(user => {
      this.setState({currentUser: user.user}, () => {
        localStorage.setItem('token', data.token)
        this.props.history.push(`/users`)
      })
    })
  }

  componentDidMount() {
    getAllUsers().then(allUsers => this.setState({allUsers: allUsers.users}))
    if ( localStorage.getItem('token') ) {
      getCurrentUser(localStorage.getItem('token')).then(user => {
        this.setState({currentUser: user.user}, this.compileAllFriendRequestsIntoState)
      })
    }
  }

  onReject = (friendRequest) => {
    rejectFriendRequest(friendRequest.id)
    .then(data => this.setState({friendRequests: data.friend_requests}))
  }

  onAccept = (friendRequest) => {
    acceptFriendRequest(friendRequest.id)
    .then(data => this.setState({friendRequests: data.friend_requests}))
  }

  signUp = (signupObj) => {
    createUser(signupObj)
    .then(data => {
      if (!data.errors) { this.setUpLoggedInUser(data) }
      else { this.setState({errors: data.errors}) }
    })
  }

  login = (email, password) => {
    loginUser(email, password)
    .then(data => {
      if (!data.error) { this.setUpLoggedInUser(data).then(this.compileAllFriendRequestsIntoState) }
      else { this.setState({errors: data.error}) }
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
        <NavigationBar friendRequests={this.state.friendRequests} logout={this.logout} currentUser={this.state.currentUser} onReject={this.onReject} onAccept={this.onAccept}/>
        <Switch>
          <Route path='/signup' render={() => <AuthAction submitAuthAction={this.signUp} authType='signup' errors={this.state.errors}/>}/>
          <Route path='/login' render={() => <AuthAction submitAuthAction={this.login} authType='login' errors={this.state.errors}/>}/>
          <Route path='/' component={() => <QueimadaContainer allUsers={this.state.allUsers} currentUser={this.state.currentUser} friendRequests={this.state.friendRequests} createdFriendRequest={this.state.createdFriendRequest}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App);
