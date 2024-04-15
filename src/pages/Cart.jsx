import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'
import './cart.css'
const Cart = () => {
  const items = useSelector(state=>state.cart)
  const dispatch=useDispatch();

   const handleRemove=(productid)=>{
      dispatch(remove(productid))
   }
  return (
    <div className='cartitems'>
       {
        items.map((i)=>(
          <div key={i.id} className='item'>
            <img src={i.image} alt="" className='cartimg'/>
            <h5 className='itemtitle'>{i.title}</h5>
            <h6 className='itemprice'>{i.price}</h6>
           <button className='cartbtn' onClick={()=>handleRemove(i.id)}>remove</button>
          </div>
        ))
       }

    </div>
  )
}

export default Cart