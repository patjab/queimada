import React, {Component} from 'react'

import {createUser} from '../adapter/adapter'

export default class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: "",
    password_confirmation: ""
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.signUp({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      gender: this.state.gender,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    })
  }

  render() {
    return (
      <div style={{"paddingTop:":"100px"}}>
        <br/>
        <br/>
        <h1>Signup</h1>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="first_name">First Name: </label><input type="text" name="first_name" value={this.state.first_name} onChange={this.onInputChange}/><br/>
          <label htmlFor="last_name">Last Name: </label><input type="text" name="last_name" value={this.state.last_name} onChange={this.onInputChange}/><br/>
          <label htmlFor="email">Email: </label><input type="text" name="email" value={this.state.email} onChange={this.onInputChange}/><br/>
          <label htmlFor="email">Gender: </label><input type="text" name="gender" value={this.state.gender} onChange={this.onInputChange}/><br/>
          <label htmlFor="password">Password: </label><input type="password" name="password" value={this.state.password} onChange={this.onInputChange}/><br/>
          <label htmlFor="password_confirmation">Password Confirmation: </label><input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.onInputChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
