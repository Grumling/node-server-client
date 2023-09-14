const userservice = {};

userservice.endpoint = {
  user: 'http://localhost:3000/user/',
  users: 'http://localhost:3000/users/',
};

// Create Users
userservice.createUser = async (user) => {
  // Send the user object to the server.
  return fetch(userservice.endpoint.user, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

// Read Users
userservice.getUsers = async () => {
  return fetch(userservice.endpoint.users).then((response) => response.json());
};

//  Read User by email
userservice.getUserByEmail = async (email) => {
  return fetch(userservice.endpoint.user + email).then((response) =>
    response.json()
  );
};

// Update Users
userservice.updateUser = async (user) => {
  return fetch(userservice.endpoint.user, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

// Delete Users
userservice.deleteUser = async (user) => {
  return fetch(userservice.endpoint.user, {
    method: 'DELETE',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default userservice;
