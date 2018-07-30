import React, {Component} from 'react'
import FriendsListContainer from './FriendsListContainer'
import InteractiveFriendContainer from './InteractiveFriendContainer'

import {getFriendships, createFriendRequest} from '../adapter/adapter'

export default class QueimadaContainer extends Component {
  state = {
    currentFriend: {},
    friendSuggestions: [],
    currentUserFriends: []
  }

  addNewFriend = (friend) => {
    createFriendRequest(friend.id, this.props.currentUser.id, localStorage.getItem('token'))
  }

  componentDidMount() {
    if (this.props.currentUser ){
      getFriendships(this.props.currentUser.id, localStorage.getItem('token'))
      .then(friendships => friendships.friendship.map(friendship => friendship.friend))
      .then(data => this.setState({currentUserFriends: data}, ()=>{
        const friendRequestsId1 = this.props.friendRequests.map(friendRequest => friendRequest.requester.id)
        const friendRequestsId2 = this.props.createdFriendRequest.map(friendRequest => friendRequest.user_id)
        const allUsers = this.props.allUsers
        const allFriends = this.state.currentUserFriends
        if ( allUsers.length > 0 && allFriends.length > 0) {
          const allExcludedIds = allFriends.map(friend => friend.id)
          allExcludedIds.push(this.props.currentUser.id)
          allExcludedIds.push(...friendRequestsId1)
          allExcludedIds.push(...friendRequestsId2)
          const suggestions = allUsers.filter(user => {
            return !allExcludedIds.includes(user.id)
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
        <InteractiveFriendContainer addNewFriend={this.addNewFriend} friendSuggestions={this.state.friendSuggestions} currentFriend={this.state.currentFriend} currentUser={this.props.currentUser} friendshipsList={this.state.friendshipsList}/>
      </div>
    )
  }
}
