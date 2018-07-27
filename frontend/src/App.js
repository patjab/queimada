import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsList from './components/FriendsList'
import FriendInfo from './components/FriendInfo'
import FindFriends from './components/FindFriends'

import SearchFriendList from './components/SearchFriendList'
import InteractiveFriendContainer from './components/InteractiveFriendContainer'

import FriendCard from './components/FriendCard'

class App extends Component {
  render() {
    return (
      <div className="ui grid" id="App">
        <FriendsList/>
        <InteractiveFriendContainer />
      </div>
    );
  }
}

export default App;

// <div className="App" className="ui grid">
//
//   <FriendsList />
//   <FriendInfo />
//   <FindFriends />
// </div>
