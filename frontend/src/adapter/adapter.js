const BASE_URL = `http://10.39.111.234:3000/api/v1`
const DEFAULT_AVATAR = `https://pbs.twimg.com/profile_images/824716853989744640/8Fcd0bji_400x400.jpg`
const createUser = (signupObj) => {
  !signupObj.avatar ? signupObj.user.avatar = DEFAULT_AVATAR : null

  return fetch(`${BASE_URL}/users`, {
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
  return fetch(`${BASE_URL}/auth`, {
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
  return fetch(`${BASE_URL}/users/${id}`)
  .then(response => response.json())
}

const getFriendships = (id, token) => {
  return fetch(`${BASE_URL}/users/${id}/friends`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
  .then(response => response.json())
}

const getCurrentUser = (token) => {
  return fetch(`${BASE_URL}/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
  .then(response => response.json())
}

const getAllUsers = () => {
  return fetch(`${BASE_URL}/users`)
  .then(res => res.json())
}

const createFriendRequest = (requested_user_id, requester_user_id, token) => {
  const body = {
    friend_request: {
      requested_user_id: requested_user_id,
      requester_user_id: requester_user_id
    }
  }

  return fetch(`${BASE_URL}/friend_requests`, {
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
  return fetch(`${BASE_URL}/friend_requests/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
  .then(res => res.json())
}

const rejectFriendRequest = (id) => {
  return fetch(`${BASE_URL}/friend_requests/${id}/reject`, {
    method: 'DELETE'
  })
  .then(res => res.json())
}

const acceptFriendRequest = (id) => {
  return fetch(`${BASE_URL}/friend_requests/${id}/accept`)
  .then(res => res.json())
}

const getMyFriendRequests = (id, token) => {
  return fetch(`${BASE_URL}/my_friend_requests/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  })
  .then(res => res.json())
}

const deleteFriend = (id) => {
  return fetch(`${BASE_URL}/friendships/${id}`, {
    method: 'DELETE'
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
  getUsersFriendRequest,
  rejectFriendRequest,
  acceptFriendRequest,
  getMyFriendRequests,
  deleteFriend
}
