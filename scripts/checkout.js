import { renderOptionSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import"../data/cart-class.js" ;
// import'../data/Backend-practice.js';

new Promise((resolve) => {
   
  loadProducts(()=>{
    console.log("finished loading")
    resolve();
  });
    
}).then(()=>{
    console.log("next step")
})


loadProducts(() => {
  renderOptionSummary();
  renderPaymentSummary();
});

