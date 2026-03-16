import React, { useEffect, useState } from 'react'
import Heroslider from '../../components/Heroslider'
import "./home.css"
import SlideProduct from '../../components/slideproduct/SlideProduct'
import Slideproductloading from '../../components/slideproduct/Slideproductloading'
import PageTransition from '../../components/PageTransition'

const categories = [
   "smartphones",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "skin-care",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "womens-dresses",
  "womens-shoes",
  "womens-watches", 
  "groceries",
  "home-decoration",
  "kitchen-accessories",
]
const Home = () => {

  const [products,setproducts] = useState({})
  const [loading,setisloading] = useState(true)
  useEffect(()=>{
    const fetchproducts = async ()=>{
      try{
        const results = await Promise.all(
          categories.map( async (category)=>{
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json();

            
            return {[category] : data.products}
          })
        )
        
        
        
        const productsdata = Object.assign({},...results)
        setproducts(productsdata)
      }


      catch(error){
          console.error("fetching error",error)
      }
      finally{
        setisloading(false)
      }
    }

    fetchproducts()
  },[])


  
  return (

   <PageTransition>
     <div>

      <Heroslider/>
      {loading?
      (
        categories.map((category)=>
      (
          <Slideproductloading key={category}/>
      )
      )
      )

      :
      (
        categories.map((category)=>
      (
          <SlideProduct key={category} data={products[category]} title={category.replace("-"," ")}/>
      )
      )
      )
      
      }

    </div>
   </PageTransition>
  )
}

export default Home
