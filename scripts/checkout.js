import { renderOptionSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import"../data/cart-class.js" ;
// import'../data/Backend-practice.js';
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
   
  loadProducts(()=>{
    resolve("value1");
  });
}),
 new Promise((resolve)=>{
     loadCart(()=>{
      resolve();
     });
  })
]).then((values)=>{
  console.log(values)
   renderOptionSummary();
   renderPaymentSummary(); 
})
/*
new Promise((resolve) => {
   
  loadProducts(()=>{
    resolve("value1");
  });
    
}).then((value)=>{
  return new Promise((resolve)=>{
     loadCart(()=>{
      resolve();
     });
  })

}).then(()=>{
   renderOptionSummary();
   renderPaymentSummary();
})
*/

// loadProducts(() => {
//   loadCart(()=>{
//     renderOptionSummary();
//     renderPaymentSummary();
//   });
 
// });

