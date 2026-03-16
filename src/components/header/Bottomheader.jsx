import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";

import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink, useBlocker, useLocation } from 'react-router-dom';
import { IoMdPersonAdd } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
const Navlinks = [
  {title:"Home",link:"/"},
  {title:"About",link:"/about"},
  {title:"Contact",link:"/contact"}
]



const Bottomheader = () => {

  const [openmenu,setopenmenu] = useState(false)
  
  const [categories,setcategories] = useState([])
  const [iscategoryopen,setiscategoryopen] = useState(false)
  
  const location = useLocation();
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(
      res =>res.json()
    ).then(data=>setcategories(data))
  },[])

  useEffect(()=>{
    setiscategoryopen(false)
  },[location])
  
  return (
    <>
      <div className='btm_header'>
        <div className='container'>
          <nav className='nav' >
            <div onClick={()=>setopenmenu(true)} className={`icon_bar`}>
                <FaBars/>
            </div>
            <div className='category_nav'>
                <div className='category_btn' onClick={()=>{setiscategoryopen(!iscategoryopen)}}>
                  
                  <p>Browse Category</p>
                  <IoMdArrowDropdown />
                </div>
                <div className={`category_list ${iscategoryopen?"active":""}`}>
                  {categories.map((category)=>(
                      <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                  ))}
                </div>
              </div>
              <div className={`nav_links ${openmenu?"open":""} `}>
                <span onClick={()=>setopenmenu(false)} className={`close-menu`}><IoClose/></span>
                {Navlinks.map((item)=>(
                  <li key={item.title} className={location.pathname === item.link ? "active":""}><NavLink to={item.link}>{item.title}</NavLink></li>
                ))}
              </div>
              
          </nav>
          <div className='sign_register'>
          
          <Link to="/signin"><PiSignInBold /></Link>
          <Link to="/register"><IoMdPersonAdd /></Link>
            
         

          </div>
        </div>
      </div>
      
    </>
  )
}

export default Bottomheader
