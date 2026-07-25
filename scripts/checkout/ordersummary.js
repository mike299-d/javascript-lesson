import {cart,removeFromCart,updateDeliveryOption,updateQuantity} from '../../data/cart.js';
import{products,getProduct} from '../../data/products.js';
import {FormatCurrency} from '../utilis/money.js';
import{hello} from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js"
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {deliveryOptions,getDeliveryOption} from "../../data/deliveryOptions.js"
import {renderPaymentSummary} from './paymentSummary.js';
hello();
const today= dayjs();
const deliveryDate=today.add(7,'days');
deliveryDate.format("dddd,MMMM D");
export function renderOptionSummary(){


let cartSummaryHtml='';

 cart.forEach((cartItem)=>{

 const productId=cartItem.productId;
 const  matchingProduct=getProduct(productId);
   
 
      
 
 const deliveryOptionId= cartItem.deliveryOptionId;
 console.log( deliveryOptionId, ' deliveryOptionId')

 const  deliveryOption = getDeliveryOption(deliveryOptionId);
 console.log(deliveryOptions, 'deloption')


 
 console.log(deliveryOption, 'deliveryOption')

  const today=dayjs();
  console.log('Current deliveryOption:', deliveryOption);
 
  console.log(deliveryOption.deliveryDays, 'date')

  const deliveryDate= today.add(deliveryOption?.deliveryDays,'days');
  console.log(deliveryDate, 'deliveryDate')
  console.log(deliveryOption?.deliveryDays, 'option')
  const dateString= deliveryDate.format('dddd,MMMM D');
console.log(dateString, 'dateString')
    cartSummaryHtml+=
    ` <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${FormatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary   js-update-link" data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input class="quantity-input js-save-input-${matchingProduct.id}">
                  <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
                  <span class="delete-quantity-link link-primary js-delete-link"data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
               ${deliveryOptionsHTML(matchingProduct,cartItem)}
                  
              </div>
            </div>
          </div>`;

});

function deliveryOptionsHTML(matchingProduct,cartItem){
 let html='';
 deliveryOptions.forEach((deliveryOption)=>{

 const today=dayjs();
 const deliveryDate= today.add(deliveryOption.deliveryDays,'days')
 const dateString= deliveryDate.format('dddd,MMMM D');
 const priceString= deliveryOption.priceCents === 0
 ?'FREE'
 :`$${FormatCurrency(deliveryOption.priceCents)}  -`;

 const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
 html+=
  `
               <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}"data-delivery-option-id="${deliveryOption.id}">
                  <input type="radio" ${isChecked ?'checked' :''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                  </div>
                </div> 
  
  `
 });
 return html;
}
document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

document.querySelectorAll('.js-delete-link')
.forEach((link) =>{
  link.addEventListener('click',()=>{
   const productId= link.dataset.productId;
   removeFromCart(productId)


  const container= document.querySelector(`.js-cart-item-container-${productId}`)
  console.log(container);
   container.remove();
   updateCartQuantity();
   renderPaymentSummary();
  })
  
})
  function updateCartQuantity(){
  
  let cartQuantity=0;
   cart.forEach((cartItem)=>{
   cartQuantity+= cartItem.quantity;
   });
  document.querySelector('.js-cart-quantity-checkout').innerHTML=`${cartQuantity} items`;
  

  };
  updateCartQuantity();


 document.querySelectorAll('.js-update-link').forEach((link)=>{
  link.addEventListener('click',()=>{
    const productId=link.dataset.productId;
    console.log(productId);


    const container=document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.add('is-editing-quantity');
  })
 });
  document.querySelectorAll('.js-save-link').forEach((link)=>{
   link.addEventListener('click',()=>{
    const productId= link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');
    const input =document.querySelector(`.js-save-input-${productId}`);
    const newQuantity=Number(input.value);
    updateQuantity(productId,newQuantity);


    const quantityLabel = document.querySelector(
      `.js-quantity-label-${productId}`
    );
    quantityLabel.innerHTML = newQuantity;
    updateCartQuantity();

  
   });
   
});

document.querySelectorAll('.js-delivery-option').forEach((element)=>{
  element.addEventListener('click',()=>{
    const {productId,deliveryOptionId}=element.dataset;
    updateDeliveryOption(productId,deliveryOptionId);
    renderOptionSummary();
    renderPaymentSummary();
  });
});
}




