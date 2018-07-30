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

const getFriendships = (id, token) => {
  return fetch(`http://localhost:3000/api/v1/users/${id}/friends`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
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

const getAllUsers = () => {
  return fetch(`http://localhost:3000/api/v1/users`)
  .then(res => res.json())
}

const createFriendRequest = (requested_user_id, requester_user_id, token) => {
  const body = {
    friend_request: {
      requested_user_id: requested_user_id,
      requester_user_id: requester_user_id
    }
  }

  return fetch(`http://localhost:3000/api/v1/friend_requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}

const getUsersFriendRequest = (id, token) => {
  return fetch(`http://localhost:3000/api/v1/friend_requests/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
  .then(res => res.json())
}

export {
  createUser,
  loginUser,
  findUser,
  getFriendships,
  getCurrentUser,
  getAllUsers,
  createFriendRequest,
  getUsersFriendRequest
}
