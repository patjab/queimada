import React, {Component} from 'react'
import FriendInfoCard from './FriendInfoCard'
import VideoChat from './VideoChat'

export default class FriendInfo extends Component {
  render() {
    console.log(!!this.props.currentFriend && !!this.props.currentUser)
    return (
      <div className="ui row" style={{"paddingBottom":"30px"}}>

        <div className="ui link cards float left">

        {Object.keys(this.props.currentFriend).length !== 0 ?
        <FriendInfoCard friend={this.props.currentFriend} deleteFriend={this.props.deleteFriend} />
          :
          <div className="card">
            <div className="ui content centered align massive">
              Please choose a user to get started
            </div>
          </div>}

          <div>
            {(this.props.currentUser && Object.keys(this.props.currentFriend).length !== 0) ?
            <VideoChat currentFriend={this.props.currentFriend} currentUser={this.props.currentUser}/>
            : null}
          </div>


        </div>

      </div>
    )
  }
}
