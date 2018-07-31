import React, { Component, Fragment } from 'react'

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
                        <div className="ui left float">
                          <img src={friendRequest.requester.avatar} alt={friendRequest.requester.full_name}/>
                        </div>
                        <div>
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

            <div className="ui compact menu inverted">
              <div className="ui simple dropdown item">
                Logged In: {this.props.currentUser.full_name}

                <div className="menu">
                  <div className="ui item huge">
                    <div className="ui left float">
                      <img src={this.props.currentUser.avatar} alt={this.props.currentUser.full_name}/>
                    </div>
                    <div style={{"text-align":"center","font-size":"24px","padding":"10px"}}>
                      {this.props.currentUser.full_name}
                    </div>
                    <div style={{"text-align":"center","font-size":"24px","padding":"10px"}}>
                      <div>
                        <div className="ui buttons">
                          <button className="ui button blue active">Settings</button>
                          <div className="or"></div>
                          <button className="ui purple button" onClick={this.props.logout}>Logout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

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
