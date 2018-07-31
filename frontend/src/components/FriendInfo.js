import React, {Component} from 'react'
import FriendInfoCard from './FriendInfoCard'

export default class FriendInfo extends Component {
  render() {
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

          <div className="card">
            <div className="image">
              <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/cloud-upload-outline.png" alt="transmit file"/>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/16186-200.png" alt="video chat"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
