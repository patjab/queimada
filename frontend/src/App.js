import React, { Component } from 'react';
import './App.css';

import FriendsList from './components/FriendsList'
import InteractiveFriendContainer from './components/InteractiveFriendContainer'

class App extends Component {
  render() {
    console.log()
    return (
      <div className="ui grid" id="App">
        <FriendsList userId={this.props.match.params.id}/>
        <InteractiveFriendContainer />
      </div>
    );
  }
}

export default App;
