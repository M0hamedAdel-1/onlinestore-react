import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../../components/slideproduct/Product";
import Slideproductloading from "../../components/slideproduct/Slideproductloading";
import PageTransition from "../../components/PageTransition";
const SearchResults = () => {
  const [results, setresults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const [loading, setloading] = useState(true);
  console.log(results);

    

  useEffect(() => {
    const fetchresults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setresults(data.products || []);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    };
    if (query) fetchresults();
  }, [query]);

  return (
    <PageTransition key={query}>
        <>
        <div className='category_products'>




            {loading?<Slideproductloading key={query} />:
                results.length >0 ?(
                    <div className='container'>

                        <div className='top_slide'>
                            <h1>Results for: {query}</h1>

                        </div>
                        <div className='products'>
                                {results.map((item ,index)=>(
                                    <Product item={item} key={index}/>
                                ))}
                        </div>

                </div>
                ):<div className="container"><p>No Results Found..</p></div>
            }
            
        </div>
    </>
    </PageTransition>
  );
};

export default SearchResults;
