import React, {Component} from 'react'
import SearchFriendList from './SearchFriendList'
import FriendCard from './FriendCard'

export default class FriendsList extends Component {
  state = {
    searchByName: "",
    friendshipsList: []
  }

  gatherFriendsIntoElements() {
    return this.state.friendshipsList
    .filter(friendship => friendship.friend.full_name.toLowerCase().includes(this.state.searchByName.toLowerCase()))
    .map(friendship => <FriendCard friend={friendship.friend} key={friendship.id}/>)
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.userId}/friends`)
    .then(response => response.json())
    .then(data => this.setState({friendshipsList: data.friendship}))
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
