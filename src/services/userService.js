import axios from 'axios';
const baseUrl = '/dashboard/user';

// CREATE user
const createUser = (userObject) => {
  const req = axios.post(`${baseUrl}/create`, userObject);
  return req.then(res => res.data)
    .catch(err => console.error(err));
};

// LOGIN
const login = (credentials) => {
  const req = axios.post(`${baseUrl}/login`, credentials);

  return req.then(res => {
    console.log('res', res.data);

    return res.data;
  })
    .catch(err => console.error(err));
}

// GET all users
const getAll = (token) => {
  const req = axios.get('/dashboard/users', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
};

// READ user
const readUser = (userId, token) => {
  const req = axios.get(`${baseUrl}/${userId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => {
    console.log(res.data);

    return res.data;
  })
    .catch(err => console.error(err));
};

// GET USERNAMES
const checkUsername = (type, input, userObject, token) => {
  // returns if request is available
  let thisUser;

  type === 'username'
    ? thisUser = {
      ...userObject,
      username: input,
      type: 'username',
    }
    : thisUser = {
      ...userObject,
      email: input,
      type: 'email',
    };

  const req = axios.post(`${baseUrl}/usernames`, thisUser, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => {
    console.log('res', res.data);
    return res.data;
  })
    .catch(err => console.error(err));
}

// POST localStorage creatures
const storeLocalCreatures = (userId, creatures, token) => {
  const req = axios.post(`${baseUrl}/${userId}`, creatures, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
}

// UPDATE user
const updateUser = (type = 'none', userId, userObject, token) => {
  const thisUser = {
    ...userObject,
    type
  };

  const req = axios.put(`${baseUrl}/${userId}/update`, thisUser, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
};

// DELETE user
const deleteUser = (userId, userObject, token) => {
  const req = axios.delete(`${baseUrl}/${userId}/delete`, userObject, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return req.then(res => res.data)
    .catch(err => console.error(err));
};

export default { 
  getAll,
  createUser,
  login,
  readUser,
  checkUsername,
  storeLocalCreatures,
  updateUser,
  deleteUser 
};
