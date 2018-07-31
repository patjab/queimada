import React, {Component} from 'react'
import FriendsListContainer from './FriendsListContainer'
import InteractiveFriendContainer from './InteractiveFriendContainer'

import {getFriendships, createFriendRequest, deleteFriend} from '../adapter/adapter'

export default class QueimadaContainer extends Component {
  state = {
    currentFriend: {},
    currentFriendshipId: null,
    friendSuggestions: [],
    currentUserFriends: [],
    currentUserFriendships: []
  }

  addNewFriend = (friend) => {
    createFriendRequest(friend.id, this.props.currentUser.id, localStorage.getItem('token'))
    .then(data => {
      this.setState({friendSuggestions: this.state.friendSuggestions.filter(friend => data.friend_request.user_id !== friend.id)})
    })
  }

  unfriend = () => {
    deleteFriend(this.state.currentFriendshipId)
    .then(data => {
      this.setState(prevState => {
        console.log("WHYYYY", this.state.friendSuggestions.filter(friend => friend.id !== this.state.currentFriend.id))
      return {
        currentUserFriendships: this.state.currentUserFriendships.filter(userFriendship => userFriendship.id !== this.state.currentFriendshipId),
        friendSuggestions: [...this.state.friendSuggestions, this.state.currentFriend],
        currentFriend: {},
        currentFriendshipId: null
      }})
    })
  }

  componentDidMount() {
    if (this.props.currentUser ) {
      getFriendships(this.props.currentUser.id, localStorage.getItem('token'))
      .then(data => {
        this.setState({currentUserFriendships: data.friendship}, ()=>{
          const friendRequestsId1 = this.props.friendRequests.map(friendRequest => friendRequest.requester.id)
          const friendRequestsId2 = this.props.createdFriendRequest.map(friendRequest => friendRequest.user_id)
          const allUsers = this.props.allUsers
          const allFriends = this.state.currentUserFriendships.map(friendship => friendship.friend)

          if ( allUsers.length > 0 && allFriends.length > 0) {
            const allExcludedIds = allFriends.map(friend => friend.id)
            allExcludedIds.push(this.props.currentUser.id)
            allExcludedIds.push(...friendRequestsId1)
            allExcludedIds.push(...friendRequestsId2)
            const suggestions = allUsers.filter(user => !allExcludedIds.includes(user.id))
            this.setState({friendSuggestions: suggestions})
          }
        })
      })
    }
  }

  setToCurrentFriend = (currentFriend, currentFriendshipId) => {
    this.setState({currentFriend, currentFriendshipId})
  }

  render() {
    return (
      <div id="QueimadaContainer">
        <FriendsListContainer currentUserFriendships={this.state.currentUserFriendships} currentUser={this.props.currentUser} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer addNewFriend={this.addNewFriend} deleteFriend={this.unfriend} friendSuggestions={this.state.friendSuggestions} currentFriend={this.state.currentFriend} currentUser={this.props.currentUser} currentUserFriendships={this.state.currentUserFriendships} friendshipsList={this.state.friendshipsList}/>
      </div>
    )
  }
}
