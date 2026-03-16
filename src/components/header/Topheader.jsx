import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdLocalGroceryStore } from "react-icons/md";

import "./header.css";
import { CartContext1 } from "../context/CartContext1";
import Cart from "../../page/cart/Cart";
import Searchbox from "./Searchbox";

const Topheader = () => {
  const { cartitems,favorites } = useContext(CartContext1);
  return (
    <>
      <div className="top_header">
        <div className="container">
          <Link className="logo" to="/">
            <MdLocalGroceryStore className="icon-logo" /> Prestige Store
          </Link>

          <Searchbox/>
          <div className="header-icons">
            <div className="icon">
              <Link to="/favorite">
                <FaRegHeart />
                <span className="count">{favorites.length}</span>
              </Link>
            </div>
            <div className="icon ">
              <Link to="/cart">
                <TiShoppingCart />
                <span className="count">{cartitems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topheader;
