import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsList from './FriendsList'
import UsersList from './UsersList'

class App extends Component {

  state = {
    current_user: 1,
    friends: [],
    users: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users/${this.state.current_user}/friends`)
    .then(res => res.json())
    .then(data => data["friendship"])
    .then(array => {
      return array.map(function(friend){
        return {...friend['friend'], friendship_id: friend['id']}
      });
    }).then(friends => {
      this.setState(() => {
        return {friends: friends}
      })
    });

    fetch(`http://localhost:3000/api/v1/users/`)
    .then(res => res.json())
    .then(data => data["users"])
    .then(users => users.filter(user => user.id !== this.state.current_user))
    .then(users => {
      this.setState(() => {
        return {users: users}
      })
    });

  }

  onFriendDeleteButton = (friend) => {
    console.log(`Deleting ${friend.full_name}`);
    console.log(`Friendship ID ${friend.friendship_id}`);
    const friends = this.state.friends.filter(f => f !== friend)
    this.setState({
      friends: friends
    });
    let url = `http://localhost:3000/api/v1/friendships/${friend.friendship_id}`
    fetch(url, {
      "method": "delete",
      "Content-Type": "application/json"
    })
    .then(res => res.json())
    .then((user) => {
      const users = this.state.users;
      users.push(user.user);
      this.setState({
        users: users
      })
    })
  }

  onFriendAddButton = (user) => {
    const friends = this.state.friends;
    friends.push(user);
    this.setState({
      friends: friends
    });
    const url = "http://localhost:3000/api/v1/friend_requests";
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'friend_request': {
          'requested_user_id': user.id,
          'requester_user_id': this.state.current_user
        }
      })
    }).then(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to InstaShare</h1>
        </header>
        <div>
          <FriendsList onFriendDeleteButton={this.onFriendDeleteButton} friends={this.state.friends}/>
          <UsersList onUserAddButton={this.onFriendAddButton} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
