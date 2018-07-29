import React, {Component} from 'react'

export default class FriendInfo extends Component {
  render() {
    return (
      <div className="row" style={{"paddingBottom":"30px"}}>
        <img src={this.props.currentFriend.avatar} className="ui centered small circular image" alt={this.props.currentFriend.full_name}/>
        <h1 className="ui huge header">Friend Info</h1>
        <div className="row">
          Name: {this.props.currentFriend.full_name}<br/>
        </div>
        <div className="row">
          Gender: {this.props.currentFriend.gender} <br/>
        </div>
        <div className="row">
          Member Since: {this.props.currentFriend.created_at}<br/>
        </div>
        <div className="row">
          Location: Location Not Included Yet<br/>
        </div>
      </div>
    )
  }
}
