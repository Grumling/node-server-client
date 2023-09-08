import product from "./product.js";
import users from "./users.js";

const app = {};

app.init = () => {

    // call the create method from the users object literal
    users.create();
    users.read();
    users.update();
    users.delete();

    // call the read method from the product object literal
    product.create();
    product.read();
    product.update();
    product.delete();
};

app.init();