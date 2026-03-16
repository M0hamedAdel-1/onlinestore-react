import React, { useContext } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaCartPlus,
  FaRegHeart,
  FaShare,
  FaCheck
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext1 } from "../context/CartContext1";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const navigate = useNavigate()

    const {cartitems,addtocart,addtofavorite,favorites,removefromfavoraite} = useContext(CartContext1)
    
    const isincart = cartitems.some((i)=>i.id === item.id)

    const isinfav = favorites.some((i)=>i.id === item.id)
// console.log(isinfav);


    const handleaddtocart = ()=>{
      addtocart(item)

      toast.success(
        <div className="toast-wrapper">
          <img src={item.images[0]} alt="image" className="toast-img"/>
          <div className="toast-content">
            <h3>{item.title}</h3>
            added to Cart
            <div>
              <button onClick={()=> navigate("/cart")} className="btn">view in cart</button>
            </div>
          </div>
        </div>
        ,{duration:3500}
      )
    }
    const handlefavorite = ()=>{

      if(isinfav){
        removefromfavoraite(item.id)
        toast.error(
          <div>{item.title} removed from favorites</div>
              ,{duration:3500}
        )
      }else{
            addtofavorite(item)
            toast.success(
              <div>{item.title} added to favorites</div>
              ,{duration:3500}
      )
      }
      
    }
    
  return (
    <div className={`product ${isincart?"in-cart":""}`}>
      <Link to={`/products/${item.id}`}>

      <span className="status_cart"><FaCheck /> in cart</span>

        <div className="img_product">
          <img src={item.images[0]} alt="product" />
        </div>
        <p className="product_name">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price">
          <span>${item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span  className={`btn_addtocart  ${isincart?"disabled":""} `}  onClick={handleaddtocart}>
          <FaCartPlus />
        </span>
        <span className={`${isinfav?"in-fav":""}`} onClick={handlefavorite}>
          
          <FaRegHeart/>
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Product;
