import React, {Component} from 'react'

export default class FriendCard extends Component {
  render() {
    return (
      <div className="column">
        <img className="ui centered small circular image" src="https://i.pinimg.com/originals/65/9a/1a/659a1ad8192a29456d58a5bbb6520eb6.jpg"/>
        <div className="ui hidden divider"></div>
        <div className="ui large red label">
          Selena Gomez
        </div>
        <p>
          Something else
        </p>
      </div>
    )
  }
}
