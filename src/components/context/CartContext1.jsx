import React, { createContext, useEffect, useState } from 'react'

export const CartContext1 = createContext()
export default function CartProvider({children}) {
    // favorites
    const [favorites,setfavorite] = useState(()=>{
            const favcart = localStorage.getItem("favoritesitems")
            return favcart?JSON.parse(favcart):[]
            
        })


        const addtofavorite = (item)=>{
            setfavorite((previtems)=>{
                if(previtems.some((i)=>i.id === item.id )) return previtems;
                // console.log(previtems);
                
                return [...previtems,item]
            })
                
            }
            useEffect(()=>{
                localStorage.setItem("favoritesitems",JSON.stringify(favorites))
            },[favorites])

            const removefromfavoraite =(id)=>{
                setfavorite(favorites.filter((item)=>item.id !== id))
            }









    // cart
        const [cartitems,setcartitems] = useState(()=>{
            const savedcart = localStorage.getItem("cartitems")
            return savedcart?JSON.parse(savedcart):[]
            
        })
        
        // increase quantity
        const increasequantity = (id)=>{
           
            setcartitems( (previtems)=> previtems.map((item)=> item.id === id?{...item,quantity:item.quantity+1}: item)
        )
        }
        // decrease quantity
          const decreasequantity = (id)=>{
           
            setcartitems( (previtems)=> previtems.map((item)=> item.id === id?{...item,quantity:item.quantity >1 ?item.quantity -1 :item.quantity}: item)
        )
        }

        // remove cart
        
        const deleteitem = (id)=>{

            
            setcartitems((previtems)=> previtems.filter(item=> item.id !== id))            

            
            
            
        }

            const addtocart = (item)=>{
            setcartitems((previtems)=> [...previtems,{...item,quantity:1}])
                
            }
            useEffect(()=>{
                localStorage.setItem("cartitems",JSON.stringify(cartitems))
            },[cartitems])
  return (

    <CartContext1.Provider value={{cartitems,addtocart,increasequantity,decreasequantity,deleteitem,addtofavorite,favorites,removefromfavoraite}}>
        {children}
    </CartContext1.Provider>
  )
}



