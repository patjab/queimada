import React, {Component} from 'react'

export default class FriendCard extends Component {
  render() {
    return (
      <div className="column">
        <img className="ui centered tiny circular image" src={this.props.friend.avatar} alt={this.props.friend.full_name}/>
        <div className="ui hidden divider"></div>
        <div style={{"textAlign":"center"}}>
          <div className="ui large red label">
            {this.props.friend.full_name}
          </div>
        </div>
        <br/><br/>
      </div>
    )
  }
}
