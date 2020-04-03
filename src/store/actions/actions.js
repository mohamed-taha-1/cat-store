import {ADD_to_cart,Remove_from_cart,clear_cart}  from  "./type"

export   function AddToCart(productInfo,quntity){
  
    return{

        type:ADD_to_cart,
        productInfo,
        quntity
    };
    
}

export   function RemoveFromCart(index){

    return{

        type:Remove_from_cart,
        index
    };


}



export   function ClearCart(){

    return{

        type:clear_cart,
      
    };


}

export default{
    AddToCart,
    RemoveFromCart,
    ClearCart
}