import React, { Component, Fragment } from 'react';
import './App.css';

import AuthAction from './auth/AuthAction'
import QueimadaContainer from './components/QueimadaContainer'
import NavigationBar from './components/NavigationBar'
import { createUser, loginUser, getCurrentUser } from './adapter/adapter'
import { Route, Switch, withRouter} from 'react-router-dom'

import {getAllUsers, getFriendships} from './adapter/adapter'


class App extends Component {
  state = {
    currentUser: null,
    errors: null,
    allUsers: [],
    currentUserFriends: [],
    friendSuggestions: []
  }

  componentDidMount() {
    getAllUsers().then(allUsers => {
      this.setState({allUsers: allUsers.users}, () => {
        if ( localStorage.getItem('token') ) {
          getCurrentUser(localStorage.getItem('token')).then(user => {
            this.setState({currentUser: user.user}, () => {
              getFriendships(this.state.currentUser.id, localStorage.getItem('token'))
              .then(friendships => friendships.friendship.map(friendship => friendship.friend))
              .then(data => this.setState({currentUserFriends: data}, ()=>{
                const allUsers = this.state.allUsers
                const allFriends = this.state.currentUserFriends
                if ( allUsers.length > 0 && allFriends.length > 0) {
                  const friendIds = allFriends.map(friend => friend.id)
                  friendIds.push(this.state.currentUser.id)
                  const suggestions = allUsers.filter(user => {
                    return !friendIds.includes(user.id)
                  })
                  this.setState({friendSuggestions: suggestions})
                }
              }));
            })
          })
        }
      })
    })
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
          <Route path='/' component={() => <QueimadaContainer friendSuggestions={this.state.friendSuggestions} currentUser={this.state.currentUser}/>}/>
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
