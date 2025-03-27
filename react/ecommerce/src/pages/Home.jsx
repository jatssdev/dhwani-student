import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../Data";
import { Link } from "react-router-dom";
import { mainContext } from "../App";




const Home = () => {
  let { addToCart } = useContext(mainContext)

  const handleAddToCart = (product) => {
    addToCart(product.id)
    alert(`${product.title.slice(0, 20)}... added to cart!`);
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {/* Categories Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (

            <Link to={`/products/${cat.value}`}>
              <div
                key={index}
                className="bg-gray-100 hover:bg-gray-200 rounded-xl p-6 text-center cursor-pointer shadow-sm transition"
              >
                <p className="text-lg font-medium">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
