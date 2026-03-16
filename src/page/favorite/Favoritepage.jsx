import React, { useContext } from "react";
import { CartContext1 } from "../../components/context/CartContext1";
import Product from "../../components/slideproduct/Product";
import "./favorite.css"
import PageTransition from '../../components/PageTransition'

const Favoritepage = () => {
  const { favorites } = useContext(CartContext1);

  return (
    <PageTransition>

    <div className="favorite_items">
      <div className="container">
         

          {favorites.length ===0 ? (<p>No Favorites products yet...</p>):
          (
            <div className="items">
               {favorites.map((item) => (
            <div className="item">
            <Product item={item} />
            </div>
          ))}
            </div>

          )}
      </div>
    </div>
          </PageTransition>
  );
};

export default Favoritepage;
