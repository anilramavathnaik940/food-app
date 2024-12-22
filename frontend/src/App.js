//import BackgrndImg from "./Images/BackgrndImg.jpg";

import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
//import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Contact from "./Components/ContactUs";
import Product from "./Components/Product";
import Payment from "./Components/Payment";
import Navbar from "./Components/Navbar";
import CheckoutPage from "./Components/CheckoutPage";
import BlogImages from "./Components/Blogs";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/blogs" element={<BlogImages/>} />
      </Routes>

    </>
  );
}

export default App;
