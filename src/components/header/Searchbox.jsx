import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Searchbox = () => {

    const [searchterm,setsearchterm] = useState("")
    const [suggestion,setsuggestion] = useState([])
    const location = useLocation()

    const navigate = useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault()

        if(searchterm.trim())
        {
            // encodeURIComponent => solve problem of *@#$%
            navigate(`/search?query=${encodeURIComponent(searchterm.trim())}`)
            setsuggestion([])
        }
    }

    useEffect(()=>{

        
        const fetchsuggestion = async ()=>{
            if(!searchterm.trim()){
                setsuggestion([])
                return ;
        }
            try{
                    const res =  await fetch(`https://dummyjson.com/products/search?q=${searchterm}`)
                    const data = await res.json()
                    setsuggestion(data.products.slice(0,5) || [])

            }catch (error) {
                console.error(error);
                setsuggestion([])
            }
        }

        const fetchtimein = setTimeout(() => {
            fetchsuggestion()
        }, 300);

        return ()=> clearTimeout(fetchtimein)

    },[searchterm])

    // when location is change suggestions to empty to hide "suggestions" when click on of product
    useEffect(()=>{
        setsuggestion([])
    },[location])

  return (
    <div className='search_container'>
        <form  onSubmit ={handlesubmit} className="search-box">
            <input
              type="text"
              placeholder="search for products"
              id="search"
              name="search"
              onChange={(e)=> setsearchterm(e.target.value)}
              autoComplete='off'
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

            {suggestion.length > 0 &&(
                <ul className='suggestions'>
                    {suggestion.map((item)=>(
                        <Link to={`/products/${item.id}`}>
                            <li  key={item.id}><img src={item.images[0]} alt='image' /> <span>{item.title}</span></li>
                        </Link>
                    ))}
                </ul>
            )}
    </div>
  )
}

export default Searchbox
