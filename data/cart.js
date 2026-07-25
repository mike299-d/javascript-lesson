 export let cart=JSON.parse(localStorage.getItem('cart'))
 if (!cart){

    cart= 
 [
    {
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'


    },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId:'2'
    }
]
 }

function saveStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}

export function addToCart(productId,quantity){
    let matchingItem;
     cart.forEach((cartItem)=>{
       if (productId === cartItem.productId){
        matchingItem =  cartItem
       }
     });
     if (matchingItem){
      matchingItem.quantity+=quantity
     }else{
      cart.push({
      productId:productId,
      quantity:quantity,
       deliveryOptionId:"1"
     });
     }

     saveStorage();
}

 export function calculateCartQuantity(){
      
  let cartQuantity=0;
   cart.forEach((cartItem)=>{
   cartQuantity+= cartItem.quantity;
});
return cartQuantity;
}

 
export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.quantity = newQuantity;

  saveStorage();
}

 export function removeFromCart(productId){
    const newCart= [];// create a new array
    cart.forEach((cartItem)=>{ // check if the product in the new array is not equal to the productId
        if (cartItem.productId !== productId){
            newCart.push(cartItem); // if the cartitem isn't equal to the productId add it to the newCart array
        }
         
    });
    cart = newCart;
    saveStorage();

}

 export function updateDeliveryOption(productId,deliveryOptionId){
  console.log(productId, 'product');
  console.log(deliveryOptionId, 'deliveryOption')
    let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveStorage();
 }
 