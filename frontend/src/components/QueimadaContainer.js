import React, {Component} from 'react'
import FriendsList from './FriendsList'
import InteractiveFriendContainer from './InteractiveFriendContainer'

export default class Queimada extends Component {
  state = {
    currentFriend: {}
  }

  setToCurrentFriend = (currentFriend) => {
    this.setState({currentFriend})
  }

  render() {
    return (
      <div className="ui grid" id="App">
        <FriendsList userId={this.props.match.params.id} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer currentFriend={this.state.currentFriend}/>
      </div>
    )
  }
}
