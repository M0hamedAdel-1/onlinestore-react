import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Product from '../../components/slideproduct/Product'
import "./categoryproducts.css"
import Slideproductloading from '../../components/slideproduct/Slideproductloading'
import PageTransition from '../../components/PageTransition'
const CategoryPage = () => {

    const [loading,setloading] = useState(true)

    const {category} = useParams()
    const [categoryproducts,setcategoryproducts] = useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data)=>{
            setcategoryproducts(data)
        })
        .catch((error)=>{
            console.error(error)
        }).finally(()=>{
            setloading(false)
        })

        

    },[category])

    // console.log(categoryproducts);
    



  return (
    <PageTransition key={category}>
        <>
        <div className='category_products'>




            {loading?<Slideproductloading key={category} />:
                <div className='container'>

                        <div className='top_slide'>
                            <h1>{category.replace("-"," ")} {categoryproducts.limit}</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, consectetur.</p>
                        </div>
                        <div className='products'>
                        {categoryproducts.products.map((item ,index)=>(
                            <Product item={item} key={index}/>
                        ))}
                        </div>

                </div>
            }
            
        </div>
    </>
    </PageTransition>
  )
}

export default CategoryPage
