import React, { Component } from 'react';
import './App.css';

import FriendsList from './components/FriendsList'
import InteractiveFriendContainer from './components/InteractiveFriendContainer'

class App extends Component {
  state = {
    currentFriend: {}
  }

  setToCurrentFriend = (currentFriend) => {
    this.setState({currentFriend})
  }

  render() {
    console.log()
    return (
      <div className="ui grid" id="App">
        <FriendsList userId={this.props.match.params.id} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer currentFriend={this.state.currentFriend}/>
      </div>
    );
  }
}

export default App;
