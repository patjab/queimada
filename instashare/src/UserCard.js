import React, { Component } from 'react'

export default class UserCard extends Component {

  render(){
    return (<li>
        { this.props.user.full_name } <button onClick={() => this.props.onUserAddButton(this.props.user)}>Add as friend</button>
      </li>);
  }
}
