import productservice from "./product.service.js";

const product = {}; // products object literal

//  create method 
// async means that the function will return a promise, and the resolve value of the promise will be whatever the function returns
product.create = async () => {

    // get the create form, frm previous line of code I.E line 5
    const form = document.querySelector('#createFormProduct');

    // if the form exists
    if(form) 
    {
        //  add an event listener to the form, when the form is submitted, run the following code
        form.addEventListener('submit', async (e) => {

            // prevent the default behaviour of the form, which is to refresh the page
            e.preventDefault();
            
            // create a variable called result, which is equal to the result of the createproduct method, which is called from the productservice object literal, and pass in the form elements as an argument
            const result = await productservice.createproduct(form.elements);
      
            console.log('Create Form Result', result);
                                                        
           
            form.reset();
        });
    }


};

//! read method
product.read = async () => {

    const listTmpl = (product) => {
        return `<tr>
            <td>${product.title}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.recommended}</td>
            <td>${product.discountInPercent}</td>
        </tr>`
    }

    const productList = document.querySelector('.product-list');
  
    if(productList)
    {
        let productData = await productservice.getproduct();
        
        productData.data.forEach( (product) => {
    
            productList.insertAdjacentHTML('beforeend', listTmpl(product))
            
        })

    }
  
};

//! update method
product.update = () => {

    const form = document.querySelector('#updateFormProduct');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await productservice.updateproduct(form.elements);
      
            console.log('Update Form Result', result);
           
            form.reset();
        });
    }


};

//! delete method
product.delete = () => {

    const form = document.querySelector('#deleteFormProduct');

    if(form)
    {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            
            const result = await productservice.deleteproduct(form.elements);
      
            console.log('Delete Form Result', result);
           
            form.reset();
        });
    }


};

export default product;