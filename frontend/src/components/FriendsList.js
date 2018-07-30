import React, {Component} from 'react'
import FriendCard from './FriendCard'
import {getFriendships} from '../adapter/adapter'

export default class FriendsList extends Component {
  state = {
    friendshipsList: []
  }

  gatherFriendsIntoElements = () => {
    return this.state.friendshipsList
    .filter(friendship => friendship.friend.full_name.toLowerCase().includes(this.props.searchByName.toLowerCase()))
    .map(friendship => <FriendCard friend={friendship.friend} setToCurrentFriend={this.props.setToCurrentFriend} key={friendship.id}/>)
  }

  componentDidMount() {
    if ( localStorage.getItem('token') ) {
      getFriendships(localStorage.getItem('token')).then(data => this.setState({friendshipsList: data.friendship}))
    }
  }

  getSearchByName = (searchByName) => {
    this.setState({searchByName})
  }

  render() {
    return (
      <div>
        {this.gatherFriendsIntoElements()}
      </div>
    )
  }
}
