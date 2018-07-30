import React, {Component} from 'react'
import SearchFriendList from './SearchFriendList'
import FriendsList from './FriendsList'

export default class FriendsListContainer extends Component {
  state = {
    searchByName: ""
  }

  getSearchByName = (searchByName) => {
    this.setState({searchByName})
  }

  render() {
    return (
      <div className="column" id="sidebar" style={{"overflow":"auto"}}>
        <SearchFriendList getSearchByName={this.getSearchByName}/>
        <FriendsList searchByName={this.state.searchByName} setToCurrentFriend={this.props.setToCurrentFriend}/>
      </div>
    )
  }
}
