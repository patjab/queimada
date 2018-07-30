import FriendInfo from './FriendInfo'
import FindFriends from './FindFriends'
import React, {Component} from 'react'

export default class InteractiveFriendContainer extends Component {
  render() {
    return (
      <div className="column" id="content" style={{"paddingTop":"20px"}}>
        <FriendInfo currentFriend={this.props.currentFriend}/>
        <FindFriends friendSuggestions={this.props.friendSuggestions} currentUser={this.props.currentUser} friendshipsList={this.props.friendshipsList}/>
      </div>
    )
  }
}
