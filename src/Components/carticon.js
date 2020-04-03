import React from "react";
import {Link } from "react-router-dom";
import {connect} from "react-redux";

  function CartIcon(props){
    return(
        <div  id="cart-icon ">
          <Link to="/Cart">
               <i className="fas fa-shopping-cart"></i>
               <p>{props.totalQuantity}</p>
            </Link>
        </div>
    )
}
 
const mapStateToProps =(state)=>{

      return {
            totalQuantity :state.cart.reduce((total,item)=> total + parseInt(item.quantity) , 0)
      };
}

export default connect(mapStateToProps)(CartIcon);