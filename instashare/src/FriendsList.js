import React, { Component, Fragment } from 'react'
import FriendCard from './FriendCard'

export default class FriendsList extends Component {

  eachFriend = () => {
    return this.props.friends.map(friend => <FriendCard key={friend.id} onFriendDeleteButton={this.props.onFriendDeleteButton} friend={friend} />)
  }

  render(){
    return (
      <Fragment>
            <h1>My Friends</h1>
            <ul>
              { this.props.friends.length === 0 ? (<p>No friends to display. Try adding new friends.</p>) : (this.eachFriend()) }
            </ul>
      </Fragment>
    );
  }
}
