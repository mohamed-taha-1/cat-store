import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CartIcon from "./Components/carticon";



// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/product";


function App  ()

{
   return (
    <Router>
       <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   <a className="navbar-brand" href="www.youtube.com">Store</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/products">Products</Link>
                     </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Cart">Cart</Link>
                    </li>
                   </ul>
         
                  </div>
         
            </nav>

         
      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products}  exact />
      <Route path="/products/:id" component={Product} />
      
      <Route path="/cart" component={Cart} />
    
     
     </div>
    </Router>
  );
 }


 
export default App;
