const createUser = (signupObj) => {
  return fetch(`http://localhost:3000/api/v1/users`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(signupObj)
  })
  .then(response => response.json())
}

const loginUser = (email, password) => {
  return fetch(`http://localhost:3000/api/v1/auth`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({email, password})
  })
  .then(response => response.json())
}

const findUser = (id) => {
  return fetch(`http://localhost:3000/api/v1/users/${id}`)
  .then(response => response.json())
}

const getFriendships = (id) => {
  return fetch(`http://localhost:3000/api/v1/users/${id}/friends`)
  .then(response => response.json())
}

const getCurrentUser = (token) => {
  return fetch(`http://localhost:3000/api/v1/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
  .then(response => response.json())
}

export {
  createUser,
  loginUser,
  findUser,
  getFriendships,
  getCurrentUser
}
