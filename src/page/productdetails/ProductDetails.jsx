import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

import "./productdetails.css"
import SlideProduct from '../../components/slideproduct/SlideProduct';
import ProductDetailsloading from './ProductDetailsloading';
import Slideproductloading from '../../components/slideproduct/Slideproductloading';
import Productimages from './Productimages';
import Porductinfo from './Porductinfo';
import PageTransition from '../../components/PageTransition';

const ProductDetails = () => {

  const {id} = useParams()
  const [product,setproduct] = useState(null)
  const [loading,setloading] = useState(true)

  const [relatedproduct,setrelatedproduct] = useState([])
    const [loadingrelatedproduct,setloadingrelatedproduct] = useState(true)


  useEffect(()=>{
    const fetchproduct = async ()=>{
      try{
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        
        setproduct(data)
        setloading(false)
      }
      catch(error){
        console.error(error);
        
      }
    }

    fetchproduct()
  },[id])


  useEffect(()=>{
    if(!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
    .then(res => res.json())
    .then(data =>{
      
      setrelatedproduct(data.products)
    }).catch((error)=>console.log(error))
    .finally(()=>{
      setloadingrelatedproduct(false)
    })
  },[product?.category])

  
  return (
    
    <PageTransition key={id}>
       <>

  {loading?<ProductDetailsloading/>:
  <div className='item_details'>
      <div className='container'>
        
        <Productimages product={product}/>


        <Porductinfo product={product}/>

      </div>
    </div>
  }

    
              

        {loadingrelatedproduct?(
          
          <Slideproductloading/>
          
        )
          : (
            
              <SlideProduct key={product.category} data={relatedproduct} title={product.category.replace("-"," ")}/>
          )
          
      }

  </>
    </PageTransition>
  )
}

export default ProductDetails
