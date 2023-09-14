import {
  productUpdateHandler,
  productCreateHandler,
  productDeleteHandler,
} from './product.handle.js';
import productservice from './product.service.js';

const product = {};

// we check if the create form is present
product.create = () => {
  const form = document.querySelector('#createFormProduct');

  if (form) {
    form.addEventListener('submit', productCreateHandler);
  }
};

// read method
product.list = async () => {
  const productList = document.querySelector('.product-list');

  const listTmpl = (product) => {
    return `<tr>
            <td>${product._id}</td>
            <td>${product.title}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.discountInPercent}</td>
            <td>${product.recommended}</td>
            <td>
            <a href="/products/update.html?_id=${product._id}">UPD /</a>
            <a href="/products/delete.html?_id=${product._id}">DEL</a>
            </td>
        </tr>`;
  };

  if (productList) {
    let productData = await productservice.getProducts();

    productData.data.forEach((product) => {
      productList.insertAdjacentHTML('beforeend', listTmpl(product));
    });
  }

  return true;
};

// update method
product.update = async () => {
  const form = document.querySelector('#updateFormProduct');

  if (form) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
      let product = await productservice.getProductById(id);

      product = product.data[0];

      if (product) {
        form.elements['_id'].value = product._id;
        form.elements['title'].value = product.title;
        form.elements['category'].value = product.category;
        form.elements['price'].value = product.price;
        form.elements['recommended'].checked = product.recommended;
        form.elements['discountInPercent'].value = product.discountInPercent;
      }
    }

    form.addEventListener('submit', (e) => productUpdateHandler(e));
  }
};

// delete method
product.delete = async () => {
  const form = document.querySelector('#deleteFormProduct');

  if (form) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
      let product = await productservice.getProductById(id);

      product = product.data[0];

      if (product) {
        form.elements['_id'].value = product._id;
      }
    }

    form.addEventListener('submit', productDeleteHandler);
  }
};

export default product;
