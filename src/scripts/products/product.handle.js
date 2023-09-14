import productservice from './product.service.js';

// Form handler for creating a product
export const productCreateHandler = async (e) => {
  e.preventDefault();

  const { title, category, price, recommended, discountInPercent } =
    e.currentTarget.elements;

  let product = {
    title: title.value,
    price: price.value,
    category: category.value,
    recommended: recommended.checked,
    discountInPercent: discountInPercent.value,
  };

  const result = await productservice.createproduct(product);

  e.target.reset();

  return result;
};

//Form handler for updating a product
export const productUpdateHandler = async (e) => {
  e.preventDefault();

  const { title, category, price, recommended, discountInPercent, id } =
    e.currentTarget.elements;

  let product = {
    _id: id.value,
    title: title.value,
    price: price.value,
    category: category.value,
    recommended: recommended.checked,
    discountInPercent: discountInPercent.value,
  };

  const result = await productservice.updateproduct(product);

  e.target.reset();

  return result;
};

//Form handler for deleting a product
export const productDeleteHandler = async (e) => {

    e.preventDefault();

    const { id } = e.currentTarget.elements;

    let product = {
        _id: id.value
    };

    const result = await productservice.deleteproduct(product);

    e.target.reset();

    return result;
};
