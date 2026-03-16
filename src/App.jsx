import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bottomheader from "./components/header/Bottomheader";
import Topheader from "./components/header/Topheader";
import About from "./components/About";
import Accessories from "./components/Accessories";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Home from "./page/home/Home";
import ProductDetails from "./page/productdetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/Scrolltotop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/categorypage/CategoryPage";
import SearchResults from "./page/results/SearchResults";
import Favoritepage from "./page/favorite/Favoritepage";

function App() {
  return (
    <>
      <header>
        <Topheader />
        <Bottomheader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            padding: "20px",
            borderRadius: "5px",
          },
        }}
      />
      <Scrolltotop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorite" element={<Favoritepage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
