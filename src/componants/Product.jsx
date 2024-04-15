import React, { useState, useEffect } from "react";
import './product.css'
import { add } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { fatchProducts } from "../store/productSlice";
import { STATUS } from "../store/productSlice";
const Product = () => {

  const {data:products,status}=useSelector(state=>state.product)
   
  const dispatch=useDispatch()
 
  useEffect(() => {
    dispatch(fatchProducts())
  }, []);

  const handleAdd=(product)=>{
    dispatch(add(product));
      
  }

if(status===STATUS.LOADING){
  return<h2 style={{fontSize:"30px", display:"flex", alignItems:"center", justifyContent:"center"}}>Loading......</h2>
}

  return (
  
      

       <div className="cards">
            {
                products.map(products=>(
                    <div className="card" key={products.id}>
                    <div >
                    <div className="img">
                        <img src={products.image} alt="" className="img" />
                    </div>
                    <h3 className="title">{products.title}</h3>
                    <p className="price">{products.price}</p>
                    </div>
                    <button className="btn" onClick={()=>handleAdd(products)}>Add to cart</button>
                    </div>
                ))
            }
          
          </div>
     
  );
};

export default Product;
