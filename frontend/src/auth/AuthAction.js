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

  displayErrors = () => {
    if (typeof this.props.errors === "string") {
      return (<div className="ui error message" >{this.props.errors}</div>)
    } else if (this.props.errors && typeof this.props.errors !== "string") {
      return this.props.errors.map(error => <div className="ui error message" key={error}>{error}</div>)
    }
  }

  render() {
    return (
      <div style={{"paddingTop":"100px"}}>
        <div className="ui row center aligned grid"><h1 className="ui massive header">{this.props.authType.slice(0,1).toUpperCase() + this.props.authType.slice(1).toLowerCase()}</h1></div>
        <div className="ui horizontal divider"></div>
        <div className="ui horizontal divider"></div>
        <div className="ui horizontal divider"></div>

        <div className="ui input focus centered fluid center aligned grid">
          <form onSubmit={this.submitHandler} className="ui form error huge">
            { this.props.authType === 'signup' ?
            <Fragment>
              <div className="ui row"><label htmlFor="first_name">First Name</label></div>
              <div className="ui row"><input type="text" name="first_name" value={this.state.first_name} onChange={this.onInputChange}/></div>
              <div className="ui horizontal divider"></div>
              <div className="ui row"><label htmlFor="last_name">Last Name</label><br/></div>
              <div className="ui row"><input type="text" name="last_name" value={this.state.last_name} onChange={this.onInputChange}/></div>
              <div className="ui horizontal divider"></div>
            </Fragment>
            : null }
            <div className="ui row"><label htmlFor="email">Email</label></div>
            <div className="ui row"><input type="text" name="email" value={this.state.email} onChange={this.onInputChange}/></div>
            <div className="ui horizontal divider"></div>
            { this.props.authType === 'signup' ?
            <Fragment>
              <div className="ui row"><label htmlFor="email">Gender</label></div>
              <div className="ui row"><input type="text" name="gender" value={this.state.gender} onChange={this.onInputChange}/></div>
              <div className="ui horizontal divider"></div>
            </Fragment>
            : null }
            <div className="ui row"><label htmlFor="password">Password</label></div>
            <div className="ui row"><input type="password" name="password" value={this.state.password} onChange={this.onInputChange}/></div>
            <div className="ui horizontal divider"></div>
            { this.props.authType === 'signup' ?
            <Fragment>
              <div className="ui row"><label htmlFor="password_confirmation">Password Confirmation</label></div>
              <div className="ui row"><input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.onInputChange}/></div>
              <div className="ui horizontal divider"></div>
            </Fragment>
            : null}
            { this.props.authType === 'signup' ? <input type="submit" value="Sign Up" className="ui big black button"/> : <input type="submit" value="Log In" className="ui big black button"/>}
            { this.displayErrors() }
          </form>
        </div>
      </div>
    )
  }
}
