import React, { Component } from 'react'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="ui inverted huge borderless fixed fluid menu">
      <a className="header item">Queimada</a>
      <div className="right menu">
        <div className="item">
          <div className="ui small input">
            <input placeholder="Search..." />
          </div>
        </div>
        <a className="item" href="/signup">Sign Up</a>
        <a className="item" href="/login">Log In</a>
        <a className="item">Help</a>
        {this.props.currentUser ? <a className="item">Logged In: {this.props.currentUser.email}</a> : <a className="item">Not Logged In</a>}
      </div>
    </div>
    )
  }
}
