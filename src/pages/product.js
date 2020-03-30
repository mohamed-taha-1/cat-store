import React from "react";

import {getById}  from "../api/products";

export default class Product extends React.Component
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

    render()
    {
        if(this.state.loading)
               return " loading ... ";

        const product=this.state.product;  //   called  constuct  
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
                           <input type="number"  value={this.state.quntity }    onChange={this.handleQuntity}      />
                           <br/>
                           <br/>
                          <p>Total :  {this.state.quntity * product.price}</p>
                           <button className="btn btn-primary">ADD to  cart</button>
                    </div>
                </div>
            </div>
        );
    }
  
}
