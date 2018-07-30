import React, {Component} from 'react'
import FriendsList from './FriendsList'
import InteractiveFriendContainer from './InteractiveFriendContainer'

export default class QueimadaContainer extends Component {
  state = {
    currentFriend: {}
  }

  setToCurrentFriend = (currentFriend) => {
    this.setState({currentFriend})
  }

  render() {
    return (
      <div className="ui grid" id="QueimadaContainer">
        <FriendsList currentUser={this.props.currentUser} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer currentFriend={this.state.currentFriend}/>
      </div>
    )
  }
}
