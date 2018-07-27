import React, {Component} from 'react'
import SearchFriendList from './SearchFriendList'
import FriendCard from './FriendCard'

export default class FriendsList extends Component {
  state = {
    displayCriteria: ""
  }

  getDisplayCriteria = (displayCriteria) => {
    this.setState({displayCriteria})
  }

  render() {
    return (
      <div id='FriendsList' className="column" id="sidebar">
        <SearchFriendList displayCriteria={this.getDisplayCriteria}/>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    )
  }
}
