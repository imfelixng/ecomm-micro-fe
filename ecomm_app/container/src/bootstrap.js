import { mount as mountProduct } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container');

const elProduct = document.querySelector('#my-products');
mountProduct(elProduct);

const elCart = document.querySelector('#my-cart');
mountCart(elCart);