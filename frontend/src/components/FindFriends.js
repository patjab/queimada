import React, {Component} from 'react'

export default class FindFriends extends Component {
  state = {
    allUsers: [],
    suggestions: []
  }

  render() {
    return (
      <div className="row" id="FindFriends">
        <h1 className="ui huge header">Suggested Friends</h1>
        {this.props.friendSuggestions.map(suggestion => <div>{suggestion.full_name}</div>)}
      </div>
    )
  }
}
