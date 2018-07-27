import React, {Component} from 'react'
import SearchFriendList from './SearchFriendList'
import FriendCard from './FriendCard'

export default class FriendsList extends Component {
  render() {
    return (
      <div id='FriendsList' className="column" id="sidebar">
        <SearchFriendList />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    )
  }
}
