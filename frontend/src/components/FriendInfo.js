import React, {Component} from 'react'
import FriendInfoCard from './FriendInfoCard'
import VideoChat from './VideoChat'

export default class FriendInfo extends Component {
  render() {
    return (
      <div className="ui row" style={{"paddingBottom":"30px"}}>
        {
          Object.keys(this.props.currentFriend).length === 0 ?
            <h1>
              Please choose a user to get started
            </h1>
          :
            <div className="ui link cards float left">
              <FriendInfoCard friend={this.props.currentFriend} deleteFriend={this.props.deleteFriend} />
              <div>
                <VideoChat currentFriend={this.props.currentFriend} currentUser={this.props.currentUser}/>
              </div>
            </div>
        }

      </div>
    )
  }
}
