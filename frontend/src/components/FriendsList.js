import React, {Component} from 'react'
import SearchFriendList from './SearchFriendList'
import FriendCard from './FriendCard'

export default class FriendsList extends Component {
  render() {
    return (
      <div id='FriendsList'>
        In Friends List
        <SearchFriendList />
        <FriendCard />
      </div>
    )
  }
}
