const productservice = {};
productservice.endpoint = {
  product: 'http://localhost:3000/product',
};

// Create product
productservice.createproduct = async (product) => {
  
  return fetch(productservice.endpoint.product, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

// Read All products
productservice.getProducts = async () => {
  return fetch(productservice.endpoint.product).then((response) =>
    response.json()
  );
};

// Update product
productservice.updateproduct = async (product) => {

  return fetch(productservice.endpoint.product, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

// Read product by id
productservice.getProductById = async (id) => {

    return fetch(productservice.endpoint.product + id)
        .then((response) => response.json())

}

// DELETE product
productservice.deleteproduct = async (product) => {
  
  return fetch(productservice.endpoint.product, {
    method: 'DELETE',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default productservice;
