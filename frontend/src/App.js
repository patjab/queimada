import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsList from './components/FriendsList'
import FriendInfo from './components/FriendInfo'
import FindFriends from './components/FindFriends'

class App extends Component {
  render() {
    return (
      <Fragment>
      <div class="ui inverted huge borderless fixed fluid menu">
        <a class="header item">Project name</a>
        <div class="right menu">
          <div class="item">
            <div class="ui small input">
              <input placeholder="Search..." />
            </div>
          </div>
          <a class="item">Dashboard</a><a class="item">Settings</a><a class="item">Profile</a><a class="item">Help</a>
        </div>
      </div>
      <div className="App" className="">
        <FriendsList />
        <FriendInfo />
        <FindFriends />
      </div>
      </Fragment>
    );
  }
}

export default App;
