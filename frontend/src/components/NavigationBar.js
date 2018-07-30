import React, { Component, Fragment } from 'react'
import { getUsersFriendRequest } from '../adapter/adapter'

export default class NavigationBar extends Component {
  state = {
    friendRequests: []
  }

  render() {
    return (
      <div className="ui inverted massive borderless fixed fluid menu">
        <a className="header item">Queimada</a>

        <div className="right menu">

          {this.props.currentUser ?
            <Fragment>
            <div className="ui compact menu inverted">

              <div className="ui simple dropdown item">
                Friend Requests
                { this.props.friendRequests.length === 0 ? null : <a className="ui green circular label">{this.props.friendRequests.length}</a>}
                <div className="menu">
                  { this.props.friendRequests.map(friendRequest => {
                    return (
                      <div className="ui item huge" key={friendRequest.id}>
                        <div>
                          {friendRequest.requester.full_name}
                        </div>
                        <div>
                          <div className="ui buttons">
                            <button className="ui button positive active" onClick={() => this.props.onAccept(friendRequest)}>Accept</button>
                            <div className="or"></div>
                            <button className="ui negative button" onClick={() => this.props.onReject(friendRequest)}>🖕 Reject</button>
                          </div>
                        </div>
                      </div>)

                  } )}
                </div>
              </div>

            </div>


              <a className="item" href='/users'>Home</a>
              <a className="item">Settings</a>
              <a className="item">Messages</a>
              <a className="item">Help</a>
              <a className="item" onClick={this.props.logout}>Logout</a>
              <a className="item">Logged In: {this.props.currentUser.full_name}</a>
            </Fragment>
            :
            <Fragment>
              <a className="item">Help</a>
              <a className="item" href="/signup">Sign Up</a>
              <a className="item" href="/login">Log In</a>
              <a className="item" href="/login">Not Logged In</a>
            </Fragment>
          }
        </div>

      </div>
    )
  }
}


// <div className="ui item pointing dropdown link">
//   <span className="text">Shopping</span>
//   <i className="dropdown icon"></i>
//   <div className="menu">
//     <div className="item">Home Goods</div>
//     <div className="item">Bedroom</div>
//     <div className="item">Status</div>
//     <div className="item">Cancellations</div>
//   </div>
// </div>
