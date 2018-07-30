import React, {Component, Fragment} from 'react'

export default class FriendCard extends Component {
  currentFriendHandler = () => {
    this.props.setToCurrentFriend(this.props.friend)
  }

  render() {
    return (
      <Fragment>
        <div className="ui row">
        <a className="ui fluid label huge" onClick={this.currentFriendHandler}>
          <img className="ui right spaced image" src={this.props.friend.avatar}/>
          {this.props.friend.full_name}
        </a>
        </div>
        <div className="ui row big"></div>
      </Fragment>
    )
  }
}
