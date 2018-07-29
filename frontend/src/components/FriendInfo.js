import React, {Component} from 'react'

export default class FriendInfo extends Component {
  render() {
    return (
      <div className="row" style={{"paddingBottom":"30px"}}>
        <h1 className="ui huge header">FriendInfo</h1>
        <div className="row">
          Name: Selena Gomez<br/>
        </div>
        <div className="row">
          Age: 26 <br/>
        </div>
        <div className="row">
          Location: Grand Praire, Texas, USA<br/>
        </div>
      </div>
    )
  }
}
