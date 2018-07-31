import FriendInfo from './FriendInfo'
import FindFriends from './FindFriends'
import React, {Component} from 'react'

export default class InteractiveFriendContainer extends Component {
  render() {
    return (
      <div className="column" id="content" style={{"paddingTop":"20px"}}>
        <FriendInfo deleteFriend={this.props.deleteFriend} currentFriend={this.props.currentFriend}/>
        <FindFriends addNewFriend={this.props.addNewFriend} friendSuggestions={this.props.friendSuggestions} currentUser={this.props.currentUser} friendshipsList={this.props.friendshipsList}/>
      </div>
    )
  }
}

// currentUserFriendships={this.props.currentUserFriendships}
