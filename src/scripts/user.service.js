const userservice = {};
userservice.endpoint = 'http://localhost:3000/user'; // The endpoint of the API
userservice.endpointUsers = 'http://localhost:3000/users/'; //! New endpoint for users

// Create Users
userservice.createUser = async (elements) => {

    // Destructure the elements object
    const { firstname, surname, email, age, street, zip, username, password } = elements;

    // Create a user object
    let user = {
        firstname: firstname.value,
        surname: surname.value,
        email: email.value,
        age: age.value,
        street: street.value,
        zip: zip.value,
        username: username.value,
        password: password.value
    }

    // Send the user object to the server
    return fetch(userservice.endpoint, { 
        method: 'POST', // Send the data as a POST request
        body: JSON.stringify(user), //
        headers: { 'Content-Type': 'application/json' } // Tell the server we are sending data as JSON
    }).then((response) => response.json()); 

  
};

/* // Read Users
userservice.getUsers = async () => {

    return fetch(userservice.endpoint)
        .then((response) => response.json())

} */

//! Read Users NEW READ
userservice.getUserS = async () => { // <-- Læg mærke til vi har omdøbt til getUsers.

    return fetch(userservice.endpointUsers) // <-- Læg mærke til det nye endpoint
        .then((response) => response.json())

}

//! Update Users
userservice.deleteUser = async (elements) => {

    // Destructure the elements object
    const { email } = elements;

    // Create a user object
    let user = {
        email: email.value,
    }

    // Send the user object to the server
    return fetch(userservice.endpoint, { 
        method: 'DELETE', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

};

//! Update Users
userservice.updateUser = async (elements) => {

    // Destructure the elements object
    const { email, member, firstname, surname, age, street, zip, username, password } = elements;

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

    console.log(user)

    // Send the user object to the server
    return fetch(userservice.endpoint, { 
        method: 'PUT', 
        body: JSON.stringify(user), 
        headers: { 'Content-Type': 'application/json' } 
    }).then((response) => response.json()); 

  
};

export default userservice;