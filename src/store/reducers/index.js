import {ADD_to_cart,Remove_from_cart, clear_cart}  from "../actions/type";


export default function CartReducer (state,action){

     switch(action.type){
         case ADD_to_cart:
             return{
                 cart:[
                     ...state.cart,
                     {
                         product:action.productInfo,
                         quntity:action.quntity
                     }
                 ]
             }
        case  Remove_from_cart:
            {
                    const item_index = action.index;
                    const new_state={...state};
                    delete new_state.cart[item_index];
                    return new_state;
            }

        case clear_cart:
                {
                       
                        const new_state={...state};
                        new_state.cart=[];
                        return new_state;
                }

         default:
             return state;
     }


}