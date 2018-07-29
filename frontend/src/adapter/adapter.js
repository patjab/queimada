const createUser = (signupObj) => {
  return fetch(`http://localhost:3000/api/v1/users`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(signupObj)
  })
}

export {
  createUser
}
// {this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.password_confirmation}
