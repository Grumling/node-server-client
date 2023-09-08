import userservice from "./user.service.js";

const users = {}; // users object literal

//  create method 
// async means that the function will return a promise, and the resolve value of the promise will be whatever the function returns
users.create = async () => {

    // get the create form, frm previous line of code I.E line 5
    const form = document.querySelector('#createForm'); 

    // if the form exists
    if(form) 
    {
        //  add an event listener to the form, when the form is submitted, run the following code
        form.addEventListener('submit', async (e) => {

            // prevent the default behaviour of the form, which is to refresh the page
            e.preventDefault();
            
            // create a variable called result, which is equal to the result of the createUser method, which is called from the userservice object literal, and pass in the form elements as an argument
            const result = await userservice.createUser(form.elements);
      
            console.log('Create Form Result', result);
           
            form.reset();
        });
    }


};

//! read method
users.read = async () => {

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
        </tr>`
    }

    const userList = document.querySelector('.user-list');
  
    if(userList)
    {
        let userData = await userservice.getUsers();
        userData.data.forEach( (user) => {
    
            userList.insertAdjacentHTML('beforeend', listTmpl(user))
            
        })

    }
  
};

//! update method
users.update = () => {

    const form = document.querySelector('#updateForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await userservice.updateUser(form.elements);
      
            console.log('Update Form Result', result);
           
            form.reset();
        });
    }


};

//! delete method
users.delete = () => {

    const form = document.querySelector('#deleteForm');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await userservice.deleteUser(form.elements);
      
            console.log('Delete Form Result', result);
           
            form.reset();
        });
    }


};

export default users;