import React, {Component} from 'react'
import FriendsListContainer from './FriendsListContainer'
import InteractiveFriendContainer from './InteractiveFriendContainer'

import {getFriendships} from '../adapter/adapter'

export default class QueimadaContainer extends Component {
  state = {
    currentFriend: {},
    friendSuggestions: [],
    currentUserFriends: []
  }


  componentDidMount() {
    if (this.props.currentUser ){
      getFriendships(this.props.currentUser.id, localStorage.getItem('token'))
      .then(friendships => friendships.friendship.map(friendship => friendship.friend))
      .then(data => this.setState({currentUserFriends: data}, ()=>{
        const allUsers = this.props.allUsers
        const allFriends = this.state.currentUserFriends
        if ( allUsers.length > 0 && allFriends.length > 0) {
          const friendIds = allFriends.map(friend => friend.id)
          friendIds.push(this.props.currentUser.id)
          const suggestions = allUsers.filter(user => {
            return !friendIds.includes(user.id)
          })
          this.setState({friendSuggestions: suggestions})
        }
      }));
    }


  }


  setToCurrentFriend = (currentFriend) => {
    this.setState({currentFriend})
  }

  render() {
    return (
      <div id="QueimadaContainer">
        <FriendsListContainer currentUser={this.props.currentUser} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer friendSuggestions={this.state.friendSuggestions} currentFriend={this.state.currentFriend} currentUser={this.props.currentUser} friendshipsList={this.state.friendshipsList}/>
      </div>
    )
  }
}
