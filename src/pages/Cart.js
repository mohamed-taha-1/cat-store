import React from "react";
import CartItem from "../Components/cartItem";
import {ClearCart} from "../store/actions/actions";

import {connect}  from "react-redux";
class Cart extends React.Component{
 
 placeOrder=()=>{

//   send the request to the server 
// clear cart



this.props.ClearCart();
alert("your order  is  success");
};       
    

    render(){
        return (
            <div>
                <h1>cart</h1>
            
                <div className="row">
                    {this.props.cartItem.map((item,index)=> 
                        <div className={'col-4'} key={item.product.id}>
                            <CartItem item={item}  index={index}/>
                        </div>
                    )}
                </div>
                <br/>
                <p>
                    totalPrice : {this.props.totalPrice}
                </p>
                <br/>
                <button  className="btn btn-primary btn-block" onClick={this.placeOrder}> Take product</button>
            </div>
        );
    }
}

const mapStateToProps =(state)=>{

    return {
           cartItem:state.cart,
          totalPrice :state.cart.reduce((total,item)=> total + parseInt (item.quantity)*item.product.price, 0)
    };
}
 

const mapDispatchToProps=(dispatch)=>{
    
    return{
        ClearCart:()=>dispatch(ClearCart()),

        
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);