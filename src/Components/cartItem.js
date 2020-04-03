import React from "react";

import {connect} from "react-redux";

import {RemoveFromCart} from "../store/actions/actions";

export  function CartItem(props){
    const {item,index} = props;
    const {product}=item
   const quntity= item.quntity;
   const price=product.price;
   const TotalPrice=quntity*price;
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <p className="card-text">
                    Price :{product.price}$
                </p>
            
               <p>quntity : {item.quntity}</p>
                <br/>
                 <p>{TotalPrice}$</p>
                <br/>

              
                <button onClick= {()=>props.RemoveFromCart(index)}>
               
                    
                    Delet
                    </button>
            </div>
        </div>
    );
}


const mapDispatchToProps=(dispatch)=>{
    
    return{
        RemoveFromCart:(index)=>dispatch(RemoveFromCart(index)),

        
    };
}

export default connect(null,mapDispatchToProps)(CartItem);