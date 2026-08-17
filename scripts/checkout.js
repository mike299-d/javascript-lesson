import {renderOptionSummary} from './checkout/ordersummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
// import"../data/cart-class.js" ;
// import'../data/Backend-practice.js';
loadProducts(()=>{
    renderOptionSummary();
    renderPaymentSummary();
}); 
 