import React, { Component } from 'react'

export default class FriendInfoCard extends Component {
  render() {
    return (
    <div className="card">
      <div className="image">
        <img src={this.props.friend.avatar} alt={this.props.friend.full_name}/>
      </div>
      <div className="content">
        <div className="header">{this.props.friend.full_name}</div>
        <div className="meta">
          <a>New York, NY</a>
        </div>
        <div className="description">
          { this.props.friend.full_name} is a user living in New York.
          { this.props.isSuggested ?
            <div>
              <div className="ui hidden fitted divider"></div>
              <div className="ui hidden fitted divider"></div>
              <div className="ui hidden fitted divider"></div>
              <div className="ui hidden fitted divider"></div>
              <div className="ui hidden fitted divider"></div>
              <div className="ui hidden fitted divider"></div>
              <div className="ui center aligned">
                <button className="positive ui button" onClick={() => {
                  this.props.addNewFriend(this.props.friend)
                }}>Add Friend</button>
              </div>
            </div>
             : null }
        </div>
      </div>
      <div className="extra content">
      <span className="right floated">
        Joined in 2013
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
      </div>
    </div>
  )}
}
