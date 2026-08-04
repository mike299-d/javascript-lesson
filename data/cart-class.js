class Cart{
     cartItems;
     localStorageKey;
     constructor(localStorageKey){
        this.localStorageKey="localStorageKey" // each of the object generated from the class is called an instance of a class
        this.loadFromStorage(); 
     }
      loadFromStorage (){
      this.cartItems=JSON.parse(localStorage.getItem(this.localStorageKey))
      if (!this.cartItems){

      this.cartItems= [{
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
}

saveStorage (){
    localStorage.setItem('this. localStorageKey',JSON.stringify(this.cartItems))
   }
   addToCart(productId,quantity){
    let matchingItem;
     this.cartItems.forEach((cartItem)=>{
       if (productId === cartItem.productId){
        matchingItem =  cartItem
       }
     });
     if (matchingItem){
      matchingItem.quantity+=quantity
     }else{
      this.cartItems.push({
      productId:productId,
      quantity:quantity,
       deliveryOptionId:"1"
     });
     }

     this.saveStorage();
}
 calculateCartQuantity(){
      
  let cartQuantity=0;
   this.cartItems.forEach((cartItem)=>{
   cartQuantity+= cartItem.quantity;
});
return cartQuantity;
 }

 
 updateQuantity(productId, newQuantity) {
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.quantity = newQuantity;

  this.saveStorage();
}
 removeFromCart(productId){
    const newCart= [];// create a new array
    this.cartItems.forEach((cartItem)=>{ // check if the product in the new array is not equal to the productId
       if (cartItem.productId !== productId){
            newCart.push(cartItem); // if the cartitem isn't equal to the productId add it to the newCart array
        }
         
    });
    this.cartItems = newCart;
    this.saveStorage();

}
updateDeliveryOption(productId,deliveryOptionId){

  console.log(deliveryOptionId, 'deliveryOption')
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveStorage();
 }
 

}



const cart= new Cart();
const buisnessCart=new Cart();



console.log(cart);
console.log(buisnessCart);
console.log(buisnessCart instanceof Cart);
