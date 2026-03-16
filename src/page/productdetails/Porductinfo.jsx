
import { FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from 'react-icons/fa'

import { FaCartShopping } from "react-icons/fa6";
import { CartContext1 } from '../../components/context/CartContext1';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import toast from 'react-hot-toast';
const Porductinfo = ({product}) => {

    const navigate = useNavigate()

    const {cartitems,addtocart,addtofavorite,favorites,removefromfavoraite} = useContext(CartContext1)
    
    const isincart = cartitems.some((i)=>i.id === product.id)


    const handleaddtocart = ()=>{
      addtocart(product)

      toast.success(
        <div className="toast-wrapper">
          <img src={product.images[0]} alt="image" className="toast-img"/>
          <div className="toast-content">
            <h3>{product.title}</h3>
            added to Cart
            <div>
              <button onClick={()=> navigate("/cart")} className="btn">view in cart</button>
            </div>
          </div>
        </div>
        ,{duration:3500}
      )
    }
    // favorite
    const isinfav = favorites.some((i)=>i.id === product.id)

    const handlefavorite = ()=>{

      if(isinfav){
        removefromfavoraite(product.id)
        toast.error(
          <div>{product.title} removed from favorites</div>
              ,{duration:3500}
        )
      }else{
            addtofavorite(product)
            toast.success(
              <div>{product.title} added to favorites</div>
              ,{duration:3500}
      )
      }
      
    }
    
  return (
    <div className='details_item'>
          <h1>{product.title}</h1>
            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
          
            </div>
              <p className='price'>${product.price}</p>
              <h5>Availability:<span>{product.availabilityStatus}</span></h5>
              <h5>Brand:<span>{product.brand}</span></h5>
              <p className='desc'>{product.description}</p>
              <h5 className='stock' ><span>Hurry Up! Only {product.stock} products left in stock.</span></h5>
              <button className={`btn ${isincart?"in-cart":""} ${isincart?"disabled":""}`} onClick={handleaddtocart} ><FaCartShopping /> {isincart?"Item cart":"Add to  cart"}</button>
              <div className='icons'>
                <span   className={`${isinfav?"in-fav":""}`} onClick={handlefavorite}> <FaRegHeart/></span>
                <span><FaShare/></span>
                
            </div>
        </div>
  )
}

export default Porductinfo
