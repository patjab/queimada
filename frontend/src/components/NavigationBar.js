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
        <a className="item" href="/signup">Sign Up</a><a className="item" href="/login">Log In</a><a className="item">Help</a>
      </div>
    </div>
    )
  }
}
