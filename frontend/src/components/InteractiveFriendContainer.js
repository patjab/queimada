import FriendInfo from './FriendInfo'
import FindFriends from './FindFriends'
import React, {Component} from 'react'

export default class InteractiveFriendContainer extends Component {
  render() {
    return (
      <div className="column" id="content">
        <br/>
        <FriendInfo currentFriend={this.props.currentFriend}/>
        <FindFriends />
      </div>
    )
  }
}
