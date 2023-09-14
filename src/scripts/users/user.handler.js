import userservice from './user.service.js';

// Form handler for creating a user
export const userCreateHandler = async (e) => {

  e.preventDefault();

  const { firstname, surname, email, age, street, zip, username, password } = e.currentTarget.elements;

  // Create a user object
  let user = {
    firstname: firstname.value,
    surname: surname.value,
    email: email.value,
    age: age.value,
    street: street.value,
    zip: zip.value,
    username: username.value,
    password: password.value,
  }

  const result = await userservice.createUser(user);

  e.target.reset();

  return result; 
};

//Form handler for updating a user
export const userUpdateHandler = async (e) => {

        e.preventDefault();

        const { email, member, firstname, surname, age, street, zip, username, password } = e.currentTarget.elements;

        // Create a user object
        let user = {
            email: email.value,
            isMember: member.checked,
            firstname: firstname.value,
            surname: surname.value,
            age: age.value,
            street: street.value,
            zip: zip.value,
            username: username.value,
            password: password.value
        };

        const result = await userservice.updateUser(user);

        e.target.reset(); 
      
        return result;
    };

    //Form handler for deleting a user
    export const userDeleteHandler = async (e) => {

      e.preventDefault();

      const { email } = e.currentTarget.elements;

      let user = {
        email: email.value,
      };

      const result = await userservice.deleteUser(user);

      e.target.reset();

      return result;
    };