import React, {Component} from 'react'

export default class FindFriends extends Component {
  state = {
    allUsers: [],
    suggestions: []
  }

  // Experimenting
  componentDidMount() {
    // fetch(`http://localhost:3000/api/v1/users`)
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({allUsers: data}, ()=>{
    //     const allUsers = this.state.allUsers.users
    //     const allFriends = this.props.friendshipsList.map(friendship => friendship.friend)
    //     if ( allUsers.length > 0 && allFriends.length > 0) {
    //       const friendIds = allFriends.map(friend => friend.id)
    //       friendIds.push(this.props.currentUser.id)
    //       const suggestions = allUsers.filter(user => {
    //         return !friendIds.includes(user.id)
    //       })
    //       this.setState({suggestions: suggestions})
    //     }
    //   })
    // })

  }

  componentDidUpdate() {
    // const allUsers = this.state.allUsers.users
    // const allFriends = this.props.friendshipsList.map(friendship => friendship.friend)
    // if ( allUsers.length > 0 && allFriends.length > 0) {
    //   const friendIds = allFriends.map(friend => friend.id)
    //   friendIds.push(this.props.currentUser.id)
    //   const suggestions = allUsers.filter(user => {
    //     return !friendIds.includes(user.id)
    //   })
    //   this.setState({suggestions})
    //
    // }

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
