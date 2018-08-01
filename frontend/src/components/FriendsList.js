import React, {Component} from 'react'
import FriendCard from './FriendCard'
import { getFriendships } from '../adapter/adapter'

export default class FriendsList extends Component {
  gatherFriendsIntoElements = () => {
    if (!!this.props.currentUserFriendships) {
      return this.props.currentUserFriendships
      .filter(friendship => {
        return friendship.friend.full_name.toLowerCase().includes(this.props.searchByName.toLowerCase())
      })
      .map(friendship => {
        return <FriendCard friendshipId={friendship.id} friend={friendship.friend} setToCurrentFriend={this.props.setToCurrentFriend} key={friendship.id}/>
      })
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
