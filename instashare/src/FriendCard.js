import React, { Component } from 'react'

export default class FriendsCard extends Component {

  render(){
    return (<li>
        { this.props.friend.full_name } <button onClick={() => this.props.onFriendDeleteButton(this.props.friend)}>Delete</button>
      </li>);
  }
}
