import React, {Component, Fragment} from 'react'

export default class FriendCard extends Component {
  currentFriendHandler = () => {
    this.props.setToCurrentFriend(this.props.friend)
  }

  render() {
    return (
      <Fragment>
        <div className="ui row center aligned grid">
        <a className="ui label" onClick={this.currentFriendHandler}>
          <img className="ui right spaced avatar image massive" src={this.props.friend.avatar}/>
          {this.props.friend.full_name}
        </a>
        </div>
        <div className="ui hidden divider"></div>
      </Fragment>
    )
  }
}



// <div className="column">
//   <img className="ui centered tiny circular image" src={this.props.friend.avatar} alt={this.props.friend.full_name}/>
//   <div className="ui hidden divider"></div>
//   <div style={{"textAlign":"center"}}>
//     <div className="ui large red label" onClick={this.currentFriendHandler}>
//       {this.props.friend.full_name}
//     </div>
//   </div>
//   <br/><br/>
// </div>
