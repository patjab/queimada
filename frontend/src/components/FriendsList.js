import React, {Component} from 'react'
import SearchFriendList from './SearchFriendList'
import FriendCard from './FriendCard'
import {getFriendships} from '../adapter/adapter'

export default class FriendsList extends Component {
  state = {
    searchByName: "",
    friendshipsList: []
  }

  gatherFriendsIntoElements = () => {
    return this.state.friendshipsList
    .filter(friendship => friendship.friend.full_name.toLowerCase().includes(this.state.searchByName.toLowerCase()))
    .map(friendship => <FriendCard friend={friendship.friend} setToCurrentFriend={this.props.setToCurrentFriend} key={friendship.id}/>)
  }

  componentDidMount() {
    getFriendships(this.props.userId).then(data => this.setState({friendshipsList: data.friendship}))
  }

  getSearchByName = (searchByName) => {
    this.setState({searchByName})
  }

  render() {
    return (
      <div className="column" id="sidebar">
        <SearchFriendList getSearchByName={this.getSearchByName}/>
        {this.gatherFriendsIntoElements()}
      </div>
    )
  }
}
