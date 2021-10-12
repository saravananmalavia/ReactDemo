import React, { Component } from 'react'; 
class Product extends Component{
     render(){ 
         return( 
            <div> <span className="m-1">Product</span> 
            <button className="btn btn-warning btm-sm m-1 ">+</button> 
            <button className="btn btn-info btm-sm m-1 ">-</button> </div> 
         )
    }
} export default Product;