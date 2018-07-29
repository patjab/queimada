import React, { Component, Fragment } from 'react'
import UserCard from './UserCard'

export default class UsersList extends Component {

  eachUser = () => {
    return this.props.users.map(user => <UserCard key={user.id} onUserAddButton={this.props.onUserAddButton} user={user} />)
  }

  render(){
    return (
      <Fragment>
            <h1>Users</h1>
            <ul>
            { this.props.users.length === 0 ? (<p>No users to display. Try spreading the word about Instashare.</p>) : (this.eachUser()) }
            </ul>
      </Fragment>
    );
  }
}
