import React, {Component} from 'react'
import FriendsListContainer from './FriendsListContainer'
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
      <div id="QueimadaContainer">
        <FriendsListContainer currentUser={this.props.currentUser} setToCurrentFriend={this.setToCurrentFriend}/>
        <InteractiveFriendContainer currentFriend={this.state.currentFriend}/>
      </div>
    )
  }
}
