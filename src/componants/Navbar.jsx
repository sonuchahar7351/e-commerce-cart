import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div className="flex items-center justify-between py-2 px-3 bg-red-300 h-14 w-full h-20">
      <span className="flex font-bold text-black-500">Redux Store</span>
     
        <div className="flex justify-between items-center">
          <Link to="/" className="decoration-slice text-lg font-bold mx-5">
            Home
          </Link>
          <Link to="/cart" className="decoration-slice text-lg font-bold mx-5">Cart</Link>
         
        </div>

        <span className="flex font-bold text-black-500">cart items: {items.length}</span>
   
    </div>
  );
};

export default Navbar;
