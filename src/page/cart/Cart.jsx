import React, { useContext } from 'react'
import { CartContext1 } from '../../components/context/CartContext1'
import { FaTrashAlt } from "react-icons/fa";

import "./cart.css"
import toast from 'react-hot-toast';
import PageTransition from '../../components/PageTransition';
const Cart = () => {
  const {cartitems,increasequantity,decreasequantity,deleteitem} = useContext(CartContext1)


  const total = cartitems.reduce((acc,item)=>acc + (item.price * item.quantity),0)
  
  const handledelete = (id)=>{
    deleteitem(id)
    toast.success(
        <h3>deleted successfully</h3>
        ,{duration:3500}
      )
  }
  
    
  return (
    <PageTransition>
      <div className='checkout'>
      <div className='order_summary'>
        <h1>Order Summary</h1>
        <div className='items'>
          {cartitems.length===0?(
            <p>cart is empty</p>
          ):(
            cartitems.map((item,index)=>(
                      <div className='item_in_cart' key={index}>
                            <div className='image_name'>
                                  <img src={item.images[0]}/>
                                <div className='content'>
                                      <h4>{item.title}</h4>
                                      <p className='price_item'>${item.price}</p>
                                      <div className='quality_control' >
                                        <button onClick={()=> decreasequantity(item.id)} >-</button>
                                        <p className='quantity'>{item.quantity}</p>
                                        <button onClick={()=>increasequantity(item.id)}>+</button>
                                      </div>
                                </div>
                                
                            </div>
                            <button  onClick={()=>handledelete(item.id)} className='delete_item'>
                              <FaTrashAlt />
                            </button>
                    </div>
            ))
          )}
        </div>
        <div className='bottom_summary'>
          <div className='shop_table'>
            <p>total:</p>
            <span className='total-checkout'>${total.toFixed(2)}</span>
          </div>

          <div className='button_order'>
            <button type='submit'>place order</button>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}

export default Cart


