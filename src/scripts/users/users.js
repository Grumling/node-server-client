import {
  userCreateHandler,
  userUpdateHandler,
  userDeleteHandler,
} from './user.handler.js';
import userservice from './user.service.js';

const users = {};

//  create method
users.create = () => {
  const form = document.querySelector('#createForm');

  if (form) {
    form.addEventListener('submit', userCreateHandler);
  }
};

//<td>${user.firstname}</td><td><a href="/users/update.html?email=${user.email}">${user.firstname}</a></td> LINK FOR NAME UPDATE

// read method
users.list = async () => {
   const userList = document.querySelector('.user-list');

  const listTmpl = (user) => {
    return `<tr>
            <td>${user.firstname}</td>
            <td>${user.surname}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.street}</td>
            <td>${user.zip}</td>
            <td>${user.username}</td>
            <td>${user.isMember}</td>
            <td>
              <a href="/users/update.html?email=${user.email}">UPD /</a>
              <a href="/users/delete.html?email=${user.email}">DEL</a>
            </td>
        </tr>`;
  };

 

  if (userList) {
    let userData = await userservice.getUsers();
    userData.data.forEach((user) => {
      userList.insertAdjacentHTML('beforeend', listTmpl(user));
    });
  }
};

// update method
users.update = async () => {
  const form = document.querySelector('#updateForm');

  if (form) {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (email) {
      let user = await userservice.getUserByEmail(email);

      user = user.data[0];

      if (user) {
        form.elements['email'].value = user.email;
        form.elements['member'].checked = user.isMember;
        form.elements['firstname'].value = user.firstname;
        form.elements['surname'].value = user.surname;
        form.elements['age'].value = user.age;
        form.elements['street'].value = user.street;
        form.elements['zip'].value = user.zip;
        form.elements['username'].value = user.username;
        form.elements['password'].value = user.password;
      }

      form.addEventListener('submit', (e) => userUpdateHandler(e));
    }
  }
};

// delete method
users.delete = async () => {
  const form = document.querySelector('#deleteForm');

  if (form) {

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if(email)
    {
      let user = await userservice.getUserByEmail(email);

      user = user.data[0];

      if(user)
      {
        form.elements['email'].value = user.email;
      }
    }

    form.addEventListener('submit', async (e) => userDeleteHandler(e));
  }
};

export default users;
