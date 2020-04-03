import React from "react";
import AddToCart from "../store/actions/actions";
import {getById}  from "../api/products";
import {connect}  from "react-redux";

 class Product extends React.Component
{   

state=
{
    product:{},
    loading:true,
    quntity:0
};

    componentDidMount()
    {
        const id =this.props.match.params.id;
        getById(parseInt(id)).then(
            product => 
            {
                setTimeout(()=>{
                    this.setState({
                        product,
                        loading:false
                    });
                },4000);
            }
        )
     
    }
  handleQuntity=(event)=>{
    const value=event.target.value;
    if(value <0){
        return ;
    }
    this.setState({
       quntity:value
    })
   }
   

    AddToCart=(product)=>{
  
        this.props.AddToCart(product,this.state.quntity);


     }
    render()
    {
        if(this.state.loading)
               return " loading ... ";
        
        const product=this.state.product; 
        const quntity =this.state.quntity;
        //   called  constuct  
        return (
            <div>
                
                <div className="row">
                    <div className="col">
                       <img src={product.image}  width="100%"   />
                    </div>
                    <div className="col">
                            
                            <h1>{product.name}</h1>
                            <p>price : {product.price}$</p>
                            <br/>
                           <p>description  :  {product.description}</p>
                           <br/>
                           <input type="number"  value={quntity }    onChange={this.handleQuntity}      />
                           <br/>
                           <br/>
                          <p>Total :  { quntity* product.price}</p>
                           <button className="btn btn-primary" onClick={this.AddToCart}>ADD to  cart</button>
                    </div>
                </div>
            </div>
        );
    }
  
}

const mapDispatchToProps=(dispatch)=>{
    
    return{
        AddToCart : (productInfo,quntity)=>dispatch(AddToCart(productInfo,quntity)),

        
    };
}
 export default connect(null,mapDispatchToProps)(Product);