import React, {Component} from 'react'
import FriendsListContainer from './FriendsListContainer'
import InteractiveFriendContainer from './InteractiveFriendContainer'

import {getFriendships} from '../adapter/adapter'

export default class QueimadaContainer extends Component {
  state = {
    currentFriend: {},
    // friendshipsList: []
    // Pass this down later in lieu of the lower friendshipList in FriendList
  }

  // Pass this down later in lieu of the lower friendshipList in FriendList
  // componentDidMount() {
  //   if ( localStorage.getItem('token') && this.props.currentUser) {
  //     getFriendships(this.props.currentUser.id, localStorage.getItem('token')).then(data => {
  //       this.setState({friendshipsList: data.friendship}, ()=> {
  //       })
  //     })
  //   }
  //
  // }

  setToCurrentFriend = (currentFriend) => {
    this.setState({currentFriend})
  }

  render() {
    return (
      <div id="QueimadaContainer">
        <FriendsListContainer currentUser={this.props.currentUser} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer friendSuggestions={this.props.friendSuggestions} currentFriend={this.state.currentFriend} currentUser={this.props.currentUser} friendshipsList={this.state.friendshipsList}/>
      </div>
    )
  }
}
