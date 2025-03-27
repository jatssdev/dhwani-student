import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';

import Cart from './pages/Cart';

import './App.css'
import Products from './pages/Products';
import { products } from './Data';


export let mainContext = createContext()
function App() {
  const [cartItems, setCartItems] = useState([])
  let addToCart = (id) => {
    let product = products.find((x) => x.id == id)
    setCartItems([...cartItems, product])
  }
  return (
    <Router>
      <mainContext.Provider value={{
        cartItems,
        addToCart,
        setCartItems
      }}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:category" element={<Products />} />
              {/* <Route path="/products" element={<Products />} /> */}
              {/* <Route path="/products/:productId" element={<ProductDetails />} /> */}
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </mainContext.Provider>
    </Router>
  );
}

export default App;
