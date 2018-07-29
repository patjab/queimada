import React, {Component, Fragment} from 'react'

export default class AuthAction extends Component {
  state = {
    user: {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      password: "",
      password_confirmation: ""
    }
  }

  onInputChange = (e) => {
    const user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState(() => {
      return {user: user}
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitAuthAction(this.state)
    // Now onto logging in the person who just signed up
  }

  render() {
    return (
      <div style={{"textAlign":"center", "fontSize":"24px"}}>
        <br/>
        <br/>
        <h1 style={{"fontSize":"36px"}}>{this.props.authType.slice(0,1).toUpperCase() + this.props.authType.slice(1).toLowerCase()}</h1><br/>
        <form onSubmit={this.submitHandler}>
          { this.props.authType === 'signup' ?
          <Fragment>
            <label htmlFor="first_name">First Name</label><br/>
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.onInputChange}/><br/><br/>
            <label htmlFor="last_name">Last Name</label><br/>
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.onInputChange}/><br/><br/>
          </Fragment>
          : null }
          <label htmlFor="email">Email</label><br/>
          <input type="text" name="email" value={this.state.email} onChange={this.onInputChange}/><br/><br/>
          { this.props.authType === 'signup' ?
          <Fragment>
            <label htmlFor="email">Gender</label><br/>
            <input type="text" name="gender" value={this.state.gender} onChange={this.onInputChange}/><br/><br/>
          </Fragment>
          : null }
          <label htmlFor="password">Password</label><br/>
          <input type="password" name="password" value={this.state.password} onChange={this.onInputChange}/><br/><br/>
          { this.props.authType === 'signup' ?
          <Fragment>
            <label htmlFor="password_confirmation">Password Confirmation</label><br/>
            <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.onInputChange}/><br/><br/>
          </Fragment>
          : null}
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
