const productservice = {};
productservice.endpoint = 'http://localhost:3000/product'; // The endpoint of the API

//! Create product
productservice.createproduct = async (elements) => {
  // Destructure the elements object
  const { title, category, price, recommended, disocuntInPercent } = elements;

  // Create a product object

  let product = {
    title: title.value,
    category: category.value,
    price: price.value,
    recommended: recommended.checked,
    disocuntInPercent: disocuntInPercent.value,
  };

  // Send the product object to the server
  return fetch(productservice.endpoint, {
    method: 'POST', // Send the data as a POST request
    body: JSON.stringify(product), //
    headers: { 'Content-Type': 'application/json' }, // Tell the server we are sending data as JSON
  }).then((response) => response.json());
};

//! Read product
productservice.getproduct = async () => {
  return fetch(productservice.endpoint).then((response) => response.json());
};

//! Update product
productservice.deleteproduct = async (elements) => {
  // Destructure the elements object
  const { id } = elements;

  // Create a product object
  let product = {
    id: _id.value, 
  };

  // Send the product object to the server
  return fetch(productservice.endpoint, {
    method: 'DELETE',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

//! Update product
productservice.updateproduct = async (elements) => {
  // Destructure the elements object
  const { title, category, price, recommended, disocuntInPercent } = elements;

  // Create a product object
  let product = {
    title: title.value,
    category: category.value,
    price: price.value,
    recommended: recommended.value,
    disocuntInPercent: disocuntInPercent.value,
  };

  console.log(product);

  // Send the product object to the server
  return fetch(productservice.endpoint, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default productservice;
